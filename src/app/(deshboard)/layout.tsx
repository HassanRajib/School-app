import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar";

export default function DeshboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    
        <div className="h-screen flex">
            {/* left */}
            <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[20%] p-4">
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                <Image src="/logo.png" alt="" width={32} height={32}></Image>
                <span className="hidden lg:block">OurSchool </span>
                </Link>
                <Menu/>
                

            </div>
            {/* right */}
            <div className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[80%] bg-[#F7F8FA] overflow-scroll flex flex-col">
                <Navbar/>
                {children}
            </div>

        </div>
    
    );
  }