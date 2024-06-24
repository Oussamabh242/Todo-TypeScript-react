import PocketBase from "pocketbase"; 
import { RecordModel } from "pocketbase";
import { AuthModel } from "pocketbase";
import {createContext , ReactNode , useContext } from "react";

type User = {
  username? : string ,
  id? : string,
}
type PbUser= AuthModel & User;

export interface Todo extends RecordModel {
    task? : string ;
    state? : string;
}

interface PbProps{
  children : ReactNode ; 
}

type FunctionContextType = {
  login: (user : logUser) => Promise<void>;
  fetchTodos: () => Promise<Todo[] | undefined>;
  isLogged: () => PbUser |null;
  createUser: (user : SignUser)=> Promise<RecordModel> ;
  createTodo: (task:string)=> Promise<Todo | undefined> ; 
};

interface logUser  {
  username : string ,
  password : string
}

interface SignUser extends logUser{
  name: string ,
  passwordConfirm:string
} ;


const pb = new PocketBase('http://127.0.0.1:8090') ;
pb.autoCancellation(false) ; 


export async  function getTodos()  {
    const user = isLogged()?.id ; 
    let data = await pb.collection("Todos").getFullList(

    ) ;
    console.log(user) ;
    console.log(data) ; 
    return data  ; 
}

const login = async ({username ,password}: logUser)=>{
  const authData = await pb.collection('users').authWithPassword(username, password);

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

const fetchTodos = async (): Promise<Todo[] | undefined> => {
  try {
    const result = await getTodos( );
    return result as Todo[]
  } catch (error) {
    console.error('Error fetching messages:', error);
    return undefined
  }
};

export const createTodo= async (task : string) : Promise<Todo | undefined> =>{
  try{
    const data = {
    task : task , 
    user :isLogged()?.id,
    state : "Blocked"
    }
    const record = await pb.collection('Todos').create(data) ; 
    return record as Todo
  }
  catch(err){
    console.log(err) ; 
    return undefined
  }
  
}

createTodo("qmsldkfjq") ; 

export const createUser=async (data : SignUser)=>{
  const record = pb.collection("users").create(data) ; 
  return record
}
// console.log(createMessag()) ;
// isLogged() ;
// createMessag() ; 
// login() ; 


export const PbContext = createContext<FunctionContextType|null>(null) ; 
export function PbContextProvider({children} : PbProps){
  return(
    <PbContext.Provider value={{login , isLogged , fetchTodos ,createUser , createTodo}}>  {children} </PbContext.Provider>
  )
}
export function usePbContext() {
  const context = useContext(PbContext);
  if (context === null) {
    throw new Error('usePbContext must be used within a PbContextProvider');
  }
  return context;
}