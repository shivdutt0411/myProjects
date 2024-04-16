import {useState, useEffect,useRef} from "react";
import FlashCardList from './flashCardList'
import './App.css'
import axios from 'axios'


export default function App() {
  const [flashCards, setFlashCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[categories, setCategories] = useState([]);



  const categoryRef = useRef();
  const amountRef = useRef();
  useEffect(()=>{
    axios.get('https://opentdb.com/api_category.php',{timeout: 10000})
    .then(res=>{
      setCategories(res.data.trivia_categories
      )})

    .catch(error=>{
      console.log("Error ocuurred while category fetching: ",error);
    })
  },[])

  function decode(str){
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  useEffect(()=>{
    axios.get('https://opentdb.com/api.php',{
      params:{
        amount: amountRef.current.value,
        category: categoryRef.current.value
      }
    }, {timeout: 10000})
    .then(res=>{
      setFlashCards(res.data.results.map((questionItem, index)=>{
        const answer = decode(questionItem.correct_answer);
        const options = [...questionItem.incorrect_answers.map(a=>decode(a)),answer]
        return {
          id: `${index}-${Date.now()}`,
          question: decode(questionItem.question),
          answer: answer,
          options: options.sort(()=>Math.random()-.5)
        }
      }))
    })
    
    .catch(error=>{
      console.log("Error fetching flash card: ", error);
    })
  },[])
  


  function handleSubmit(e){
    e.preventDefault();
    axios.get('https://opentdb.com/api.php',{
      params:{
        amount: amountRef.current.value,
        category: categoryRef.current.value
      }
    },{timeout:10000})
    .then(res=>{
      setFlashCards(res.data.results.map((questionItem, index)=>{
        const answer = decode(questionItem.correct_answer);
        const options = [...questionItem.incorrect_answers.map(a=>decode(a)),answer]
        return {
          id: `${index}-${Date.now()}`,
          question: decode(questionItem.question),
          answer: answer,
          options: options.sort(()=>Math.random()-.5)
        }
      }))
    })
    
    .catch(error=>{
      console.log("Error fetching flash card: ", error);
    })

  }
    return(
      <>
      <form className='header' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id='category' ref={categoryRef}>
            {categories.map(category=>{
              return <option key={category.id} value= {category.id}>{category.name}</option>
            })}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor="amount">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue = {10} ref={amountRef}/>
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">

      <FlashCardList flashCards = {flashCards} />
    
      </div>
      </>
      

      
    )
}

