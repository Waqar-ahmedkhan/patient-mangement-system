"user client"
import {
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";

 interface  CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label: string,

 }

  
function CustomForm( { control, fieldType, name, Label }:  CustomProps ) {
  return (
    <>

   <FormField
    control={control}
    name="username"
    render={({ field }) => (
      <FormItem className="flex-1 ">
        {fieldType !== FormFieldType.CHECKBOX && label (
            <FormLabel>{label}</FormLabel>
          )}

        
      
      </FormItem>
    )}
    />
    </>
  )
}

export default CustomForm