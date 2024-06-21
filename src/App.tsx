
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PocketBase from 'pocketbase';
import { useEffect } from 'react';
import { useState } from 'react';
import { RecordModel } from 'pocketbase';
import { LoginFrom } from './Login';
import { Button } from './components/ui/button';

// interface Message extends RecordModel {
//   message? : string ;
// }

 function App() {
  const pb = new PocketBase('http://127.0.0.1:8090') ;
  let [result ,setResult] = useState<RecordModel[] | null>(null)  ;  
 useEffect(()=>{
  pb.collection("users").getFullList()
  .then(res=>{setResult(res)})
  .catch(err=>console.log(err))  ;
 },[]) ; 

 console.log(result) ;
  

  return (
    <div className='App flex flex-col items-center justify-center'>
      <h1 className=''>Hello world</h1>
      <div className='w-2/6'>
      <LoginFrom/>
      </div>
      
      <Button>hi</Button>
    </div>
  )
}

async function query(db : PocketBase) {
  return await db.collection('messages').getFullList({
    sort: '-created',
});
}

export default App
