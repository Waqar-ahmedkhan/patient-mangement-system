import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <>

    <div className="min-w-screen grid md:grid-cols-2  min-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[456px]">
           <div className="flex items-center gap-2">
          <Image src="/Logomark.png" alt="patient logo"
             width={40}
             height={40}
           className=" mb-10 w-fit h-10"  />
          <h1 className="text-xl font-bold mb-10 text-white">CarePulse</h1>

          </div>
          
 


            <PatientForm/>


          <div className=" mt-32  w-[170px] h-[24px]">
            <div>
            ©carepulse copyright
            </div>

          
          </div>


            



           </div>



        
         </section>
    </div>
    
    </>

   
    

   
  );
}
