"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
 
import { UserValidationForm } from "@/lib/Validation"
import CustomForm from "../CustomForm"



export enum FormFieldType {
  INPUT = "input",
  Textarea = "textarea",
   Phone_Number = "phone_number",
   
  

}


export function PatientForm() {

  const form = useForm<z.infer<typeof UserValidationForm>>({

 resolver: zodResolver(UserValidationForm),
    defaultValues: {
      username: "",
      email: "",
      number: "",
    },
  })

  function onSubmit(values: z.infer<typeof UserValidationForm>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
    <section className="mb-4 space-y-4">
      <h1 className="header">Hi there, ....  👋</h1>
      <p className="text-dark-700">Get Start with Appointment</p>

    </section>
       
    <CustomForm 
        control={form.control} 
        fieldType={FormFieldType.INPUT}
        name={"username"}
        label={"Full Name"}
        placeholder={"Enter your Full Name"}
        iconSrc={"/assets/icons/img.png"}
        iconalt={"icon"}


                /> 
        <Button type="submit" className="shad-primary-btn w-full">Submit</Button>
      </form>
    </Form>
  )
}