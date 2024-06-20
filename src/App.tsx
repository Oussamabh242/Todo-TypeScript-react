
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PocketBase from "pocketbase" ; 
function App() {
  
  
  const pb:PocketBase = new PocketBase("http://127.0.0.1:8090") ; 


  return (
    <>
      hello world
    </>
  )
}

export default App
