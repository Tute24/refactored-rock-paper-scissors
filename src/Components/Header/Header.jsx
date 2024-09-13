export default function Header(props){
    function initHandler(){
        props.setPlayerScore(0)
        props.setMachineScore(0)
        props.setRoundResult(null)
        props.setOpponentChoice(null)
        props.setPlayerChoice(null)
    }

    
    return(
        <>
            <div>
                <button type="button" id="initButton" onClick={() => initHandler()}>Initialize Game</button>
            </div>
            <div>
                <label htmlFor="playerScore">Player Score:</label>
                <input type="text" id="playerScore" value={props.playerScore}  />
                <label htmlFor="machineScore">Opponent Score:</label>
                <input type="text" id="machineScore" value ={props.machineScore} />
            </div>
        </>
    )
}