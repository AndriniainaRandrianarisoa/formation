import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InvoiceMethodEnum, InvoiceStatusEnum } from "@/services/enums/general-enums";
import { getEnum } from "@/services/utils/enum.utils";

const formSchema = z.object({
  method: z.string().min(2, {
    message: "Method must be at least 2 characters."
  }),
  amount: z
    .string()
    .min(1, {
      message: "Amount must be at least 2 characters."
    })
    .transform((val) => val.length),
  percent: z
    .string()
    .min(1, {
      message: "Percent must be at least 2 characters."
    })
    .transform((val) => val.length),
  clientName: z.string().min(2, {
    message: "Client name must be at least 2 characters."
  })
});

type InvoiceFormValues = z.infer<typeof formSchema>;

export const AddInvoice = (props: any) => {
  const { handleValidForm, handleCancelClick } = props
  const [methods, setMethods] = useState([]);
  const defaultValues: Partial<InvoiceFormValues> = {
    // method: "Your name",
    // amount: 0,
    // percent: 0,
    // clientName : "Florian"
  };

  //const [defaultValues, setDefaultValues]:Partial<InvoiceFormValues> = useState({})

  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  function onSubmit(e, data: InvoiceFormValues) {
    e.preventDefault()
    const formatted_values = {
      ...data, 
      id: "INV008", 
      status : InvoiceStatusEnum.NOTPAID,
    }
    handleValidForm(formatted_values)
    
    //setDefaultValues({})
  }

  useEffect(() => {
    const response = getEnum(InvoiceMethodEnum);
    setMethods(response);
  }, []);

  
  function handleChange(evt: any) {
    const { name, value } = evt.target;
    setDefaultValues({ ...defaultValues, [name]: value });
    console.log("🚀 ~ file: AddInvoice.tsx:91 ~ handleChange ~ defaultValues:", defaultValues)
  }

  const coucou = 0

  const test  = () => {
    console.log("coucou")
  }

  const test2 = () => {
    console.log("vroum")
  }

  if (coucou == 0) {
    test()
  } else {
    test2()
  }

  coucou == 0 ? test() : test2()


  // const test = 0

  // if(test == 0) {
  //   console.log("coucou")
  // } else {
  //   console.log("caca")
  // }

  // test == 0 ? console.log("coucou") : console.log("caca")



  return (
    <div>
      <DialogContent className="sm:max-w-[425px]" >
        <DialogHeader>
          <DialogTitle>Create invoice</DialogTitle>
          <DialogDescription>Create your new invoice here</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={(e) => form.handleSubmit(e, onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="method"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Method</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a payment method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {methods.map((method: any, index) => (
                        <SelectItem
                        onChange={(evt) => handleChange(evt)}
                          key={index}
                          value={method.value}
                          onSelect={() => {
                            form.setValue( "method", method.value);
                          }}
                        >
                          {method.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem> 
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="$20" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="percent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Percent</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="20%" {...field}  />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client name</FormLabel>
                  <FormControl>
                    <Input placeholder="Client one" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
            <Button variant="outline" className="mx-3" onClick={handleCancelClick}>Cancel</Button>
          </form>
        </Form>
      </DialogContent>
    </div>
  );
};
