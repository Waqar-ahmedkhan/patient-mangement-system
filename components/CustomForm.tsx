"user client"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import Image from "next/image";
import { Control } from "react-hook-form";
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
         <div className="flex rounded-md border ml-2 border-dark-500 bg-dark-400">
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
           className="shad-input border-0  flex-1" />
          </FormControl>
          </div>
      )
        

    
      default:
        break;
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
            <FormLabel className="">{label}</FormLabel>
          )}

        <RenderField  field={field} props={props} />

        
      
      </FormItem>
    )}
    />
    </>
  )
}

export default CustomForm