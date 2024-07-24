import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-w-screen min-h-screen grid md:grid-cols-2">
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[456px] my-auto">
            <div className="flex items-center gap-2 mb-10">
              <Image
                src="/Logomark.png"
                alt="patient logo"
                width={40}
                height={40}
                className="w-fit h-10"
              />
              <h1 className="text-xl font-bold text-white">CarePulse</h1>
            </div>

            <PatientForm />

            <div className="mt-32 flex gap-40">
              <div className="text-regular-14 flex justify-items-end  text-zinc-400 hover:text-zinc-300 xl:text-left">
                ©carepulse 2024
              </div>
                <Link href="/?admin=true" className="text-green-500">
                Admin </Link>
             
            </div>
          </div>

        </section>
        <div className="w-70% h-full ">
           <Image src="/image.png" alt="image" width={500} height={500} className="w-[760px] rounded-[24px] h-screen" />
            </div>
      </div>
    </>
  );
}