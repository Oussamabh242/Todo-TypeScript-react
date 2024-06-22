
import './App.css'

import { Auth } from './Auth';
import { Link , Routes , Route} from "react-router-dom"
function  App() {
  
//   let [result ,setResult] = useState<RecordModel[] | null>(null)  ;  
//  useEffect(()=>{
//   pb.collection("users").getFullList()
//   .then(res=>{setResult(res)})
//   .catch(err=>console.log(err))  ;
//  },[]) ; 
  // useEffect( ()=>{
  //   fetchData() ;
  // }, []) ;
  

  return (
    

      <div className='App flex flex-col items-center justify-center'>

        
        <Routes>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
        
        <button><Link to="/auth">hello world</Link></button>

     </div>
    
  )
}



export default App  ;


