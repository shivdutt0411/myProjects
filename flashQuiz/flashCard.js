import {useState, useEffect, useRef} from 'react';
export default function FlashCard({flashCard}){
    const [flip, setFlip] = useState(false);
    const[height, setHeight] = useState('initial');

    const frontRef = useRef();
    const backRef = useRef();

    function setMaxHeight(){
        const frontHeight = frontRef.current.getBoundingClientRect().height;
        const backHeight = backRef.current.getBoundingClientRect().height;
        setHeight(Math.max(frontHeight, backHeight,100));

    }

    useEffect(setMaxHeight,[flashCard.question, flashCard.answer, flashCard.options ])
    useEffect(()=>{
        window.addEventListener('resize',setMaxHeight);
        return ()=>window.removeEventListener('resize',setMaxHeight);
    },[])
    return(
        <div style = {{height: height}}
        className={`card ${flip? 'flip': ''}`}
        onClick={()=>setFlip(prevFlip=>!prevFlip)}>

        <div className="front" ref={frontRef}>
            {flashCard.question}
            <div className="flashCard-options">
                {flashCard.options.map(option=>{
                    return <div key = {option} className="flashCard-option">{option}</div>

                })}
            </div>
        </div>
        <div className="back" ref = {backRef}>{flashCard.answer}</div>
        
        </div>
    )
     
}