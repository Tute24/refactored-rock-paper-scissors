import css from '../../RSP.module.css'

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
        <>
            <div className={css.finishedHeaderArea}>
                <label htmlFor="playerScore" className={css.scoreLabel}>Player Score:</label>
                <input type="text" id="playerScore" value={props.playerScore} className={css.scoreInputPlayer} />
                <label htmlFor="machineScore" className={css.scoreLabel}>Opponent Score:</label>
                <input type="text" id="machineScore" value ={props.machineScore} className={css.scoreInputMachine} />
            </div>
            <div className={css.finishedGameArea}>
                <div className={css.finishedGameText}>
                    {props.gameWinner}
                </div>
                <div>
                    <button className={css.reinitButton} type="button" onClick={() => restart()} >Play a new game!</button>
                </div>
            </div>

        </>
    )
}