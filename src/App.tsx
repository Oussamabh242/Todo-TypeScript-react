
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PocketBase from 'pocketbase';
import { useEffect } from 'react';
import { useState } from 'react';
import { RecordModel } from 'pocketbase';
import { LoginFrom } from './Login';


interface Message extends RecordModel {
  message? : string ;
}

 function App() {
  const pb = new PocketBase('http://127.0.0.1:8090') ;
  let [result ,setResult] = useState<Message[] | null>(null)  ;  
 useEffect(()=>{
  pb.collection("messages").getFullList()
  .then(res=>{setResult(res)})
  .catch(err=>console.log(err))  ;
 } , []) ; 
 console.log(result) ;
  

  return (
    <div className='w-5/12 h-screen grid content-center justify-center'>
      <h1 className='flex flex-row'>Hello world</h1>
      <LoginFrom/>
      
      
    </div>
  )
}

async function query(db : PocketBase) {
  return await db.collection('messages').getFullList({
    sort: '-created',
});
}

export default App
