"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sat",
    absent: 30,
    present: 50,

  },
  {
    name: "Sun",
    absent: 80,
    present: 50,

  },
  {
    name: "Mon",
    absent: 50,
    present: 50,

  },
  {
    name: "Tue",
    absent: 90,
    present: 50,

  },
  {
    name: "Wed",
    absent: 20,
    present: 50,

  },
  {
    name: "Thu",
    absent: 40,
    present: 50,

  },
  {
    name: "Fri",
    absent: 10,
    present: 50,

  },
];

const Attendance = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name"
            axisLine={false}
            tick={{fill: "#8884d8"}}
            tickLine={false}
          />
          <YAxis axisLine={false}
            tick={{fill: "#82ca9d"}}
            tickLine={false}/>
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgrey"}}/>
          <Legend  align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom:"40px"}}/>
          <Bar dataKey="present" fill="#8884d8" legendType='circle' radius={[10, 10, 0, 0]}/>
          <Bar dataKey="absent" fill="#82ca9d"  legendType='circle' radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Attendance