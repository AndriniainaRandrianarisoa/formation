import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import "./App.css";
import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { login } from "./services/api/user";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password:  z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})



function App() {
  const [count, setCount] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 ~ file: App.tsx:42 ~ onSubmit ~ values:", values)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const response = await login(values)
    console.log("🚀 ~ file: App.tsx:49 ~ onSubmit ~ response:", response)
    if(response.status) {
      console.log("coucou", response.datas)
    } else {
      console.log("mnerde")
    }
  }


  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
              
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
              
            )}
          />
          
        
          <Button type="submit">Submit</Button>
        </form>
      </Form>

    </>
  );
}

export default App;
