"use client"

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentForm";



const forms: {
  [key: string]: (type: "create" | "update", date?: any) => JSX.Element;

} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />
};

const FormModel = ({table,type,data,id}: {
    table:|"teacher" | "student" 
    |"perant"
    |"subject"
    |"exam"
    |"lesson"
    |"class"
    |"assignment"
    |"result"
    |"attendence"
    |"event"
    |"announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number
}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-lamaYellow" : type === "update" ? "bg-lamaSky" : "bg-lamaPurple"; 

    const [open, setOpen] = useState(false);

    const Form = () => {
      return type === "delete" && id ? (
        <form action="" className="p-4 flex flex-col gap-4">
          <span className=" text-center font-medium ">get lost from {table}?</span>
          <button className=" bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center ">Delete</button>
        </form>
      ):type === "create" || type ==="update" ? (
        forms[table](type,data)
      ):(
        "form n f"
      )
    }

  return( 
    <>
    <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={()=>setOpen(true)}>
        <Image src={`/${type}.png`} alt="" width={16} height={16}/>
    </button>
    {open && (<div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] ">
        <Form/>
       <div className=" absolute top-4 right-4 cursor-pointer" onClick={()=>setOpen(false)}>
        <Image src="/close.png" alt="" width={14} height={14}/>
       </div>
      </div>
    </div> 
    )}     
    </>
  )
}

export default FormModel