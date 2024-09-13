
export default function Play(props){
    let options = ["ROCK", "PAPER", "SCISSORS"]
    

    function choiceHandler(ev){
        
        let currentChoice = ev.target.textContent
        let previousChoice = props.lastSelected
        
        props.setLastSelected(currentChoice)

        if(currentChoice === "ROCK" && previousChoice=== "ROCK" ){
            props.setPlayerChoice("You can't select rock twice in a row")
            props.setOpponentChoice(null)
        }else{         
            props.setPlayerChoice(currentChoice)
            let opntChoice = options[Math.floor(Math.random()*options.length)]
            props.setOpponentChoice(opntChoice)

            if(currentChoice === "ROCK" && opntChoice === "PAPER"){
                props.setMachineScore((count) => count + 1)
            } else if(currentChoice === "ROCK" && opntChoice === "SCISSORS"){
                props.setPlayerScore((count) => count +1)
            } else if (currentChoice === "SCISSORS" && opntChoice === "PAPER"){
                props.setPlayerScore((count) => count +1)
            } else if(currentChoice === "SCISSORS" && opntChoice === "ROCK"){
                props.setMachineScore((count) => count + 1)
            } else if(currentChoice === "PAPER" && opntChoice === "ROCK"){
                props.setPlayerScore((count) => count +1)
            }else if(currentChoice === "PAPER" && opntChoice === "SCISSORS"){
                props.setMachineScore((count) => count + 1)      
    }}}
    return(
        <>
        <button type="button" className="choiceButtons" id="ROCK" onClick={choiceHandler}>ROCK</button>
        <button type="button" className="choiceButtons" id="PAPER" onClick={choiceHandler}>PAPER</button>
        <button type="button" className="choiceButtons" id="SCISSORS" onClick={choiceHandler}>SCISSORS</button>
        </>
    )
}