import FlashCard from './flashCard';
export default function FlashCardList({flashCards}){
    return(
        <div className="card-grid">
            {flashCards.map(flashCard=><FlashCard key = {flashCard.id} flashCard ={flashCard} />)}
        </div>
    )

}