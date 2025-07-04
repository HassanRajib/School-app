import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Tabel from "@/components/Tabel";
import TableSearch from "@/components/TableSearch";
import { eventsData, role, } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Event = {
  id:number;
  title:string;
  class:string;
  date:string;
  startTime:string;
  endTime:string;
}

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell ",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell ",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell ",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const EventListPage = () => {

  const renderRow = (item:Event)=>(
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className=" hidden md:table-cell">{item.date}</td>
      <td className=" hidden md:table-cell">{item.startTime}</td>
      <td className=" hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
        {role === "admin" && (
            <>
            <FormModel table="event" type="update" data={item}/>      
            <FormModel table="event" type="delete" id={item.id}/>
            </>
          )}
        </div>
      </td>
    </tr>
  )
  return (
    <div className="bg-white p-4 rounded-md flex-col m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Event</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModel table="event" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* list */}
      <div>
        <Tabel columns={columns} renderRow={renderRow} data={eventsData}/>
      </div>
      {/* bottom */}
      <Pagination />
    </div>
  );
};

export default EventListPage;