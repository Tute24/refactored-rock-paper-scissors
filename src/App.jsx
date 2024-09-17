import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Play from './Components/Play/Play'
import Game from './Components/Game/Game'
import Result from './Components/Result/Result'

function App() {
 const [playerScore,setPlayerScore] = useState()
 const [machineScore,setMachineScore] = useState ()
 const [playerChoice,setPlayerChoice] = useState (null)
 const [opponentChoice,setOpponentChoice] = useState (null) 
 const [lastSelected,setLastSelected] = useState(null)
 const [roundResult,setRoundResult] = useState(null)
 const [gameWinner, setGameWinner] = useState(null)   


useEffect(()=>{
    if(playerScore === 5){
        console.log("Won")
        setGameWinner("YOU WON THE GAME!")
    } else if(machineScore === 5){
        console.log("Lost")
        setGameWinner("The MACHINE ENDED YOU!")
    }  
},[playerScore,machineScore])


function renderHeader(){
    if(!gameWinner){
        return(<>
            <Header playerScore={playerScore} setPlayerScore={setPlayerScore} machineScore={machineScore} setMachineScore={setMachineScore} playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} opponentChoice={opponentChoice} setOpponentChoice={setOpponentChoice} roundResult={roundResult} setRoundResult={setRoundResult}
    />
        </>)
    }
}


 function renderPlayGame(){
    if(playerScore !== undefined && !gameWinner  ){
        return (
            <>
                <Play playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} opponentChoice={opponentChoice} setOpponentChoice={setOpponentChoice} lastSelected={lastSelected} setLastSelected={setLastSelected} playerScore={playerScore} setPlayerScore={setPlayerScore} machineScore={machineScore} setMachineScore={setMachineScore} roundResult={roundResult} setRoundResult={setRoundResult} />

                <Game playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} opponentChoice={opponentChoice} setOpponentChoice={setOpponentChoice} playerScore={playerScore} setPlayerScore={setPlayerScore} machineScore={machineScore} setMachineScore={setMachineScore} roundResult={roundResult} setRoundResult={setRoundResult}  />   
    </>)
}
    else if(gameWinner){
        return(
            <>
                <Result playerScore={playerScore} setPlayerScore={setPlayerScore} machineScore={machineScore} setMachineScore={setMachineScore} playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} opponentChoice={opponentChoice} setOpponentChoice={setOpponentChoice} roundResult={roundResult} setRoundResult={setRoundResult} gameWinner={gameWinner} setGameWinner={setGameWinner} lastSelected={lastSelected} setLastSelected={setLastSelected}/>
            </>)
} 
    else{
        return null
}}


 return(
    <>
    {renderHeader()}
    {renderPlayGame()}
</>

    )  
}

export default App
