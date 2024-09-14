export default function Result(props){

    function restart(){
        props.setGameWinner(null)
        props.setPlayerScore(0)
        props.setMachineScore(0)
        props.setRoundResult(null)
        props.setPlayerChoice(null)
        props.setLastSelected(null)
        props.setOpponentChoice(null)
    }
    return(
        <div>
            <div>
                <label htmlFor="playerScore">Player Score:</label>
                <input type="text" id="playerScore" value={props.playerScore}  />
                <label htmlFor="machineScore">Opponent Score:</label>
                <input type="text" id="machineScore" value ={props.machineScore} />
            </div>
            <div>
                {props.gameWinner}
            </div>
            <div>
                <button type="button" onClick={() => restart()} >Play a new game!</button>
            </div>


        </div>
    )
}