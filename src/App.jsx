import { useState } from 'react'
import Header from './Components/Header/Header'


function App() {
 const [playerScore,setPlayerScore] = useState(null)
 const [machineScore,setMachineScore] = useState (null) 
 return(
    <Header playerScore={playerScore} setPlayerScore={setPlayerScore} machineScore={machineScore} setMachineScore={setMachineScore}/>
    )  
}

export default App
