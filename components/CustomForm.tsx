"user client"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import Image from "next/image";
import { Control } from "react-hook-form";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FormFieldType } from "./forms/PatientForm";

 interface  CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder: string,
    iconSrc?: string,
    iconAlt?: string,


 }

 const RenderField = ({field, props}: {field: any; props: CustomProps}) => {
   const { fieldType, placeholder, iconSrc, iconAlt } = props;

    switch (fieldType)  {
      case FormFieldType.INPUT: 
      return (
         <div className="flex rounded-md border  border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt || "icon"}
              height={24}
              width={24}
              className="ml-2"
              />
              
          )}
          <FormControl>
            <input  placeholder={placeholder}
            {...field}
           className="shad-input border-0 flex-1 pl-2" />
          </FormControl>
          </div>
      )
    case FormFieldType.PHONE_INPUT:
         return (
           <FormControl>
            <PhoneInput
                  defaultCountry="Pak"
                   />
           </FormControl>
         )       
    }


}

  
function CustomForm(  props :  CustomProps ) {
  const {  control, fieldType, name, label} = props;
  return ( 
    <>

   <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex-1 ">
        {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="shad-input-label">{label}</FormLabel>
          )}

        <RenderField  field={field} props={props} />

        <FormMessage className="shad-error" />
      
      </FormItem>
    )}
    />
    </>
  )
}

export default CustomForm