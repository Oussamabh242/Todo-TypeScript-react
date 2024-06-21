import PocketBase from "pocketbase"; 
import { RecordModel } from "pocketbase";
import { AuthModel } from "pocketbase";
type User = {
  username? : string ,
  id? : string,
}
type PbUser= AuthModel & User;

interface Message extends RecordModel {
    message? : string ;
  }
  
const pb = new PocketBase('http://127.0.0.1:8090') ;
pb.autoCancellation(false) ; 


export async  function getMessages()  {
    let data = await pb.collection("messages").getFullList() ;
    return data  ; 
}
const login = async ()=>{
  const authData = await pb.collection('users').authWithPassword('ali', 'azertyuiop');

// after the above you can also access the auth data from the authStore
  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  if(pb.authStore.model)
    console.log(pb.authStore.model.id);
} ; 
export const isLogged = ():PbUser |null=>{
  if(pb.authStore.model )
    return pb.authStore.model as PbUser
  else 
    return null 
}

export const createMessag= async ()=>{
  try{
    const data = {
    "message" : "waaa" , 
    "user" :isLogged()
    }
    const message = await pb.collection('messages').create(data) ; 
    
  }
  catch(err){
    console.log(err) ; 
  }
}
isLogged() ;
createMessag() ; 
login() ; 