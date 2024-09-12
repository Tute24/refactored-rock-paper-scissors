
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
            
            props.setPlayerChoice(ev.target.textContent)
            props.setOpponentChoice(options[Math.floor(Math.random()*options.length)])}
        
    }
    return(
        <>
        <button type="button" className="choiceButtons" id="ROCK" onClick={choiceHandler}>ROCK</button>
        <button type="button" className="choiceButtons" id="PAPER" onClick={choiceHandler}>PAPER</button>
        <button type="button" className="choiceButtons" id="SCISSORS" onClick={choiceHandler}>SCISSORS</button>
        </>
    )
}