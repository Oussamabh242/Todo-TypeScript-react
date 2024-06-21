
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PocketBase from 'pocketbase';
import { useEffect } from 'react';
import { useState } from 'react';
import { RecordModel } from 'pocketbase';
import { LoginFrom } from './Login';
import { Button } from './components/ui/button';
import { getMessages } from './lib/pocketbase.tsx';
import { isLogged } from './lib/pocketbase.tsx';
function  App() {
  
//   let [result ,setResult] = useState<RecordModel[] | null>(null)  ;  
//  useEffect(()=>{
//   pb.collection("users").getFullList()
//   .then(res=>{setResult(res)})
//   .catch(err=>console.log(err))  ;
//  },[]) ; 
  useEffect( ()=>{
    fetchData() ;
  }, []) ;
  if(isLogged())
    console.log(isLogged()?.username) ; 

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

const fetchData = async () => {
  try {
    const result = await getMessages();
    console.log(result);
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
};

export default App  ;


