"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"

import { UserValidationForm } from "@/lib/Validation"
import { useRouter } from "next/router"
import { useState } from "react"
import CustomForm from "../CustomForm"
import SubmitButton from "../SubmitButton"



export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX= "checkbox",
  DATE_PICKER= "datePicker",
  SELECT= "select",
  SKELETON= "skeleton"
}


export function PatientForm() {
  const router = useRouter();
  const [isloading, setisloading]= useState(false);

  const form = useForm<z.infer<typeof UserValidationForm>>({

  resolver: zodResolver(UserValidationForm),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  function onSubmit({name, email, phone}: z.infer<typeof UserValidationForm>) {
      setisloading(true)
try {
  // const  userData =  {name, email,  phone }
  //  const user = await CreateUser(userData);

  //  if(user)  router.push(`/patient/${user.$id}/register`)

} catch (e){
  console.log(e)
  return (
  error: "its have error  onSubmit"
)
}
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
        iconSrc={"/name.svg"}
        iconAlt={"icon"}
                    />
  
    <CustomForm 
        control={form.control} 
        fieldType={FormFieldType.INPUT}
        name={"Email"}
        label={"Email"}
        placeholder={"vickikhan@gmail.com"}
        iconSrc={"/email.svg"}
        iconAlt={"icon"}
                    />
    <CustomForm 
        control={form.control} 
        fieldType={FormFieldType.PHONE_INPUT}
        name={"PHONE"}
        label={"PHONE"}
        placeholder={"316-5470110"}
        iconSrc={"/PHONE.svg"}
        iconAlt={"icon"}
                    />
        {/* <Button type="submit" className="shad-primary-btn w-full">Submit</Button> */}
        <SubmitButton isLoading={isloading} > Get Started </SubmitButton>
      </form>
    </Form>
  )
}