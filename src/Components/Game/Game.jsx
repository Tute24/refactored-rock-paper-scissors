import css from '../../RSP.module.css'
import { useEffect, useState } from 'react';

export default function Game(props){
  const [conditionalClass, setConditionalClass] = useState(null) 
useEffect(()=>{
    if(props.roundResult === "Round Lost! Play Again!"){
        setConditionalClass(`${css.resultTextLost}`)
    } else if(props.roundResult === "Round Won! Play Again!"){
        setConditionalClass(`${css.resultTextWon}`)
    } else{
        setConditionalClass(`${css.resultText}`)
    }
},[props.roundResult])
    return (
        <div className={css.roundResults}>       
            <div className={css.choicesText}>
                <div><span className={css.gameSpan}>Your choice: </span> <span className={css.choiceSpan}>{props.playerChoice} </span></div>
                <div><span className={css.gameSpan}>Opponent's choice: </span> <span className={css.choiceSpan}> {props.opponentChoice} </span></div> 
            </div> 
            <div className={conditionalClass}>{props.roundResult}</div>
            
        </div>
    )
}