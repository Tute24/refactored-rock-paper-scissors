export default function Game(props){
    
    
    return (
        <div>       
            
            <div>Your choice: {props.playerChoice} </div>
            <div>Opponent's choice: {props.opponentChoice} </div>  
            <div>{props.roundResult}</div>
            
        </div>
    )
}