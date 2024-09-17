import css from '../../RSP.module.css'


export default function Play(props){
    let options = ["ROCK", "PAPER", "SCISSORS"]

    function choiceHandler(ev){
        
        let currentChoice = ev.target.textContent
        let previousChoice = props.lastSelected
        
        props.setLastSelected(currentChoice)

        if(currentChoice === "ROCK" && previousChoice=== "ROCK" ){
            props.setPlayerChoice("You can't select rock twice in a row")
            props.setOpponentChoice(null)
            props.setRoundResult("")
        }else{         
            props.setPlayerChoice(currentChoice)
            let opntChoice = options[Math.floor(Math.random()*options.length)]
            props.setOpponentChoice(opntChoice)

            if(currentChoice === "ROCK" && opntChoice === "PAPER"){
                props.setMachineScore((count) => count + 1)
                props.setRoundResult("Round Lost! Play Again!")
            } else if(currentChoice === "ROCK" && opntChoice === "SCISSORS"){
                props.setPlayerScore((count) => count +1)
                props.setRoundResult("Round Won! Play Again!")
            } else if (currentChoice === "SCISSORS" && opntChoice === "PAPER"){
                props.setPlayerScore((count) => count +1)
                props.setRoundResult("Round Won! Play Again!")
            } else if(currentChoice === "SCISSORS" && opntChoice === "ROCK"){
                props.setMachineScore((count) => count + 1)
                props.setRoundResult("Round Lost! Play Again!")
            } else if(currentChoice === "PAPER" && opntChoice === "ROCK"){
                props.setPlayerScore((count) => count +1)
                props.setRoundResult("Round Won! Play Again!")
            }else if(currentChoice === "PAPER" && opntChoice === "SCISSORS"){
                props.setMachineScore((count) => count + 1)  
                props.setRoundResult("Round Lost! Play Again!")    
            } else if(currentChoice===opntChoice){
                props.setRoundResult("It's a draw! Play Again!")
            } 
}}
    return(
        <div className={css.choiceArea}>
        <button type="button" className={css.gameButton} id="ROCK" onClick={choiceHandler}>ROCK</button>
        <button type="button" className={css.gameButton} id="PAPER" onClick={choiceHandler}>PAPER</button>
        <button type="button" className={css.gameButton} id="SCISSORS" onClick={choiceHandler}>SCISSORS</button>
        </div>
    )
}