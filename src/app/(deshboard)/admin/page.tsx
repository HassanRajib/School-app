import Announcements from "@/components/Announcements"
import Attendance from "@/components/Attendance"
import CountChart from "@/components/CountChart"
import EventCalender from "@/components/EventCalender"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* UserCard */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student"/>
          <UserCard type="teacher"/>
          <UserCard type="admin"/>
          <UserCard type="parent"/>
        </div>
        {/* MC */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
          </div>
          {/* Ac */}
          <div className="w-full lg:2/3 h-[450px]">
            <Attendance/>
          </div>
        </div>
        {/* BC */}
        <div className="w-full h-[500px]">
          <FinanceChart/>
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender/>
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage