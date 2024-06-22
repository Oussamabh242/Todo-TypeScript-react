"use client"

import {useEffect  } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePbContext } from "@/context/pocketbase";
import LoginForm from "@/components/LoginForm" ; 
import SignupForm from "@/components/SignupForm";

export function Auth(){
  
    // 
    
    
    // useEffect(()=>{
    //   fetchMessages() ;
    // }, []) ; 
     
    
    return (
      <div className="w-1/3">
        <Tabs defaultValue="SignIn" >
          <TabsList className="w-full">
            <TabsTrigger value="SignIn" className="flex-grow data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">signin</TabsTrigger>
            <TabsTrigger value="Signup" className="flex-grow data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">signup</TabsTrigger>
          </TabsList>
          <TabsContent value="SignIn" >

          <LoginForm/>
          
          </TabsContent>
          <TabsContent value="Signup">
            <SignupForm/>
          </TabsContent>
        </Tabs>
      </div>
        
        
      )

}


