"use client"

import Image from 'next/image';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 82, fill: "#c3ebfa" },
  { name: 'Group B', value: 18, fill: "#fae27c" },
  
];

const Perfomence = () => {
  return (
    <div className='bg-white p-4 rounded-md h-80 relative'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Performance</h1>
            <Image src="/moreDark.png" alt='' width={16} height={16}/>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-3xl font-bold'>9.5</h1>
        <p className='text-xs text-gray-300'>of 10 max LTS</p>
      </div>
      <h2 className='font-medium absolute bottom-16 left-0 right-0 m-auto text-center'>1st semester - 2nd semester</h2>
    </div>
  )
}

export default Perfomence