import Image from "next/image"

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto items-center flex gap-2 text-xs rounded-full ring-1 ring-gray-200 px-2">
            <Image src="/search.png" alt="" width={22} height={22}/>
            <input type="text" placeholder="Search" className="w-[200px] p-2 bg-transparent outline-none" />
        </div>
  )
}

export default TableSearch