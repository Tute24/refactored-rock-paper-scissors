export default function Game(props){
    
    return (
        <>
        <div>Your choice: {props.playerChoice} </div>
        <div>Opponent's choice: {props.opponentChoice} </div>
        </>
    )
}