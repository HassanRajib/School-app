import Announcements from "@/components/Announcements"
import BigCalander from "@/components/BigCalander"
import Perfomence from "@/components/Perfomence"
import Image from "next/image"
import Link from "next/link"

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* left */}
        <div className="w-full xl:w-2/3">
            {/* top */}
            <div className="flex flex-col lg:flex-row gap-4">
  {/* user card */}
  <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
    <div className="w-1/3">
      <Image
        src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt=""
        width={144}
        height={144}
        className="w-36 h-36 rounded-full object-cover"
      />
    </div>
    <div className="w-2/3 flex flex-col justify-between gap-4">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">Rajib Hassan</h1>
      </div>
      <p className="text-sm text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nam?
      </p>
      <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
          <Image src="/blood.png" alt="" width={14} height={14} />
          <span>A+</span>
        </div>
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
          <Image src="/date.png" alt="" width={14} height={14} />
          <span>January 2025</span>
        </div>
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
          <Image src="/mail.png" alt="" width={14} height={14} />
          <span>rajib@gmail.com</span>
        </div>
        <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
          <Image src="/phone.png" alt="" width={14} height={14} />
          <span>01700-000001</span>
        </div>
      </div>
    </div>
  </div>
  {/* smaill card */}
  <div className="flex-1 flex gap-4 justify-between flex-wrap">
    {/* card */}
    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
      <Image
        src="/singleAttendance.png"
        alt=""
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <div>
        <h1 className="text-xl font-semibold">95%</h1>
        <span className="text-sm text-gray-400">Attendance</span>
      </div>
    </div>
    {/* card */}
    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
      <Image
        src="/singleBranch.png"
        alt=""
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <div>
        <h1 className="text-xl font-semibold">5</h1>
        <span className="text-sm text-gray-400">Branches</span>
      </div>
    </div>
    {/* card */}
    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
      <Image
        src="/singleLesson.png"
        alt=""
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <div>
        <h1 className="text-xl font-semibold">9</h1>
        <span className="text-sm text-gray-400">Lessons</span>
      </div>
    </div>
    {/* card */}
    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
      <Image
        src="/singleClass.png"
        alt=""
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <div>
        <h1 className="text-xl font-semibold">9</h1>
        <span className="text-sm text-gray-400">Classes</span>
      </div>
    </div>
  </div>
</div>
            {/* bottom */}
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                <h1>Teacher's Schedule</h1>
                <BigCalander/>
            </div>
        </div>
        {/* right */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Shortcuts</h1>
                <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                    <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
                    teacher's Classes
                    </Link>
                    <Link href="/" className="p-3 rounded-md bg-lamaPurpleLight">
                    teacher's Students
                    </Link>
                    <Link href="/" className="p-3 rounded-md bg-lamaYellowLight">
                    teacher's Lessons
                    </Link>
                    <Link href="/" className="p-3 rounded-md bg-pink-50">
                    teacher's Exams
                    </Link>
                    <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
                    teacher's Assignments
                    </Link>
                </div>
            </div>
            <Perfomence/>
            <Announcements/>
        </div>
    </div>
  )
}

export default SingleTeacherPage