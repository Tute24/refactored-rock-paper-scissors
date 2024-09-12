export default function Header(props){
    function handleInit(){
        props.setPlayerScore(0)
        props.setMachineScore(0)
    }
    return(
        <>
            <div>
                <button type="button" id="initButton" onClick={() => handleInit()}>Initialize Game</button>
            </div>
            <div>
                <label htmlFor="playerScore">Player Score:</label>
                <input type="text" id="playerScore" value={props.playerScore} />
                <label htmlFor="machineScore">Opponent Score:</label>
                <input type="text" id="machineScore" value ={props.machineScore} />
            </div>
        </>
    )
}