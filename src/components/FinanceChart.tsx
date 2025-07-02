"use client"
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
    name: 'Jan',
    income: 1200,
    expense: 800,
  },
  {
    name: 'Feb',
    income: 1500,
    expense: 1000,
  },
  {
    name: 'Mar',
    income: 5400,
    expense: 3400,
  },
  {
    name: 'Apr',
    income: 800,
    expense: 1000,
  },
  {
    name: 'May',
    income: 1600,
    expense: 1200,
  },
  {
    name: 'Jun',
    income: 1900,
    expense: 1400,
  },
  {
    name: 'Jul',
    income: 1500,
    expense: 900,
  },
  {
    name: 'Aug',
    income: 1800,
    expense: 1900,
  },
  {
    name: 'Sep',
    income: 500,
    expense: 900,
  },
  {
    name: 'Oct',
    income: 2500,
    expense: 1900,
  },
  {
    name: 'Nov',
    income: 1100,
    expense: 1200,
  },
  {
    name: 'Dec',
    income: 1600,
    expense: 500,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart