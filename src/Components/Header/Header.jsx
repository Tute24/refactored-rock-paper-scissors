import css from '../../RSP.module.css'

export default function Header(props){
    function initHandler(){
        props.setPlayerScore(0)
        props.setMachineScore(0)
        props.setRoundResult(null)
        props.setOpponentChoice(null)
        props.setPlayerChoice(null)
    }

    
    return(
        <div className={css.headerArea}>
            <div>
                <button type="button" className={css.initButton} id="initButton" onClick={() => initHandler()}>Initialize Game</button>
            </div>
            <div>
                <label htmlFor="playerScore" className={css.scoreLabel}>Player Score:</label>
                <input type="text" id="playerScore" value={props.playerScore}  className={css.scoreInputPlayer}/>
                <label htmlFor="machineScore" className={css.scoreLabel}>Opponent Score:</label>
                <input type="text" id="machineScore" value ={props.machineScore} className={css.scoreInputMachine} />
            </div>
        </div>
    )
}