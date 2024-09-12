import { useState } from 'react'
import Header from './Components/Header/Header'
import Play from './Components/Play/Play'
import Game from './Components/Game/Game'

function App() {
 const [playerScore,setPlayerScore] = useState()
 const [machineScore,setMachineScore] = useState ()
 const [playerChoice,setPlayerChoice] = useState (null)
 const [opponentChoice,setOpponentChoice] = useState (null) 
 const [lastSelected,setLastSelected] = useState(null)
 return(
    <>
    <Header playerScore={playerScore} setPlayerScore={setPlayerScore} machineScore={machineScore} setMachineScore={setMachineScore} 
    />
    <Play playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} opponentChoice={opponentChoice} setOpponentChoice={setOpponentChoice} lastSelected={lastSelected} setLastSelected={setLastSelected} />
    <Game playerChoice={playerChoice} setPlayerChoice={setPlayerChoice} opponentChoice={opponentChoice} setOpponentChoice={setOpponentChoice} />
</>

    )  
}

export default App
