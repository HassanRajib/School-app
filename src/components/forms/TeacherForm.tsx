"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(4, { message: "must at least 4 characters long!" })
    .max(40, { message: "must at most 40 characters long!" }),
  email: z.string().email({ message: "Invalid email eddress!" }),
  password: z.string().min(8, { message: "Invalid email eddress!" }),
  firstName: z.string().min(1, { message: "First name is requird!" }),
  lastName: z.string().min(1, { message: "last name is requird!" }),
  phone: z.string().min(1, { message: "Phone is requird!" }),
  bloodType: z.string().min(1, { message: "Blood Type is requird!" }),
  address: z.string().min(1, { message: "Address is requird!" }),
  birthDay: z.date({ message: "BirthDay is requird!" }),
  sex: z.enum(["male", "female"], { message: "sex is required" }),
  img: z.instanceof(File, { message: "image is required" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "updtae";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Teacher</h1>
      <span className="text-xs text-gray-600 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
      <InputField
        label="Username"
        name="username"
        defaultValue={data?.username}
        register={register}
        error={errors.username}
        />
      <InputField
        label="Email"
        name="email"
        type="email"
        defaultValue={data?.email}
        register={register}
        error={errors.email}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        defaultValue={data?.password}
        register={register}
        error={errors.password}
      />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
      <InputField
        label="FirstName"
        name="firstName"
        defaultValue={data?.firstName}
        register={register}
        error={errors.firstName}
        />
      <InputField
        label="LastName"
        name="lastName"
        defaultValue={data?.lastName}
        register={register}
        error={errors.lastName}
      />
      <InputField
        label="Phone"
        name="phone"
        defaultValue={data?.phone}
        register={register}
        error={errors.phone}
      />
      <InputField
        label="Address"
        name="address"
        defaultValue={data?.address}
        register={register}
        error={errors.address}
        />
      <InputField
        label="Blood Type"
        name="bloodType"
        defaultValue={data?.bloodType}
        register={register}
        error={errors.bloodType}
        />
      <InputField
        label="Birth Day"
        name="birthDay"
        type="date"
        defaultValue={data?.birthDay}
        register={register}
        error={errors.birthDay}
        />
      <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-400">Sex</label>
      <select className="ring-1 ring-gray-300 p-2 rounded-md text-sm w-full" {...register("sex")} defaultValue={data?.sex}>
        <option value="male">Male</option>
        <option value="female">female</option>
      </select>
      {errors.sex?.message && <p className="text-xs text-red-400">{errors.sex.message.toString()}</p>}
    </div>
      <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
      <label className="text-xs text-gray-400 flex items-center gap-2 cursor-pointer" htmlFor="img">
        <Image src="/upload.png" alt="" width={28} height={28}/>
        <span>Upload</span>
      </label>
      <input type="file" id="img" {...register("img")} className="hidden" />
      {errors.sex?.message && <p className="text-xs text-red-400">{errors.sex.message.toString()}</p>}
    </div>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-md">
        {type === "create" ? "create" : "update"}
      </button>
    </form>
  );
};

export default TeacherForm;
