import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"  ;
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useContext, useEffect } from "react";
import {usePbContext } from "@/context/pocketbase.tsx";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8).max(50)
  }) ;

const LoginFrom = () => {
    const {login , isLogged , fetchMessages} = usePbContext() ;
    // useEffect(()=>{
    //   fetchMessages() ;
    // }, []) ; 
     
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: ""
        },
      })
    function onSubmit(values: z.infer<typeof formSchema>) {
        login({username: values.username , password :values.password}) ; 
    } ; 
    return ( 
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8 ">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="flex justify-center">Submit</Button>
          </form>
        </Form>
     );
}
 
export default LoginFrom;