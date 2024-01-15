import React from 'react'
import { GoHome } from "react-icons/go";
import { BsClipboard2DataFill } from "react-icons/bs";
import { TbCategory ,TbDiscount2} from "react-icons/tb";
import { HiOutlineTruck } from "react-icons/hi2";
import { PiSpeakerHighBold } from "react-icons/pi";
import { HiOutlineChartBar, HiOutlineLightningBolt } from "react-icons/hi";
import { MdPayments } from "react-icons/md";
import { TfiLocationArrow } from "react-icons/tfi";
import { FaUserFriends } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";
import { CiCircleQuestion ,CiSearch} from "react-icons/ci";
import { PiSpeakerHighFill } from "react-icons/pi";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Price from './Price';


const SidebarLink = ({ icon, text }) => (
  <a className="flex items-center" href="#" rel="ugc">
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);
const Inventory = () => {

  const renderPrices = () => {
    return Array.from({ length: 20 }, (_, index) => <Price key={index} />);
  };

  return (

    <div className="flex h-screen bg-gray-100">
    <nav className="w-64 px-8 py-4 bg-[#363740] text-white">
    <div className="flex items-center space-x-2 mb-10">
      
      <span className="font-bold">Nishyan</span>
    </div>
    <div className="space-y-4">
      <SidebarLink icon={<GoHome className="h-5 w-5" />} text="Home" />
      <SidebarLink icon={<BsClipboard2DataFill className="h-5 w-5" />} text="Orders" />
      <SidebarLink icon={<TbCategory className="h-5 w-5" />} text="Products" />
      <SidebarLink icon={<HiOutlineTruck className="h-5 w-5" />} text="Delivery" />
      <SidebarLink icon={<PiSpeakerHighBold className="h-5 w-5" />} text="Marketing" />
      <SidebarLink icon={<HiOutlineChartBar className="h-5 w-5" />} text="Analytics" />
      <SidebarLink icon={<MdPayments className="h-5 w-5" />} text="Payments" />
      <SidebarLink icon={<TfiLocationArrow className="h-5 w-5" />} text="Tools" />
      <SidebarLink icon={<FaUserFriends className="h-5 w-5" />} text="Audience" />
      <SidebarLink icon={<IoColorPaletteSharp className="h-5 w-5" />} text="Appearance" />
      <SidebarLink icon={<HiOutlineLightningBolt className="h-5 w-5" />} text="Plugins" />
    </div>
    <div className="absolute bottom-0 left-0 p-8">
      <span className="text-sm">Available credits</span>
      <span className="block font-bold">₹222.10</span>
    </div>
  </nav>

    
  <div className="flex-1 px-8  overflow-y-auto relative"> 
        <div className="sticky top-0 z-50 bg-white p-4 rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <h1 className="text-xl  mr-2">Payments</h1>
            <CiCircleQuestion className="h-5 w-5 mr-2" />
            <span className='text-sm'>How it works</span>
            <input
              type="search"
              className="mx-auto max-w-md h-10 rounded-md border border-input bg-background px-5 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                paddingRight: '150px',
                marginRight: '45rem', 
              }}
              placeholder="🔍 Search features, tutorials, etc."
            />
            <PiSpeakerHighFill className="mr-20 h-6 w-6 bg-gray-300 " /> 
            <IoMdArrowDropdownCircle className="ml-2 h-6 w-6 bg-gray-300" /> 
          </div>
          <hr />
        </div>
  
  <div className="flex items-center ml-8 mt-8 mb-8 ">
  <h1 className="text-xl mr-2">Overview</h1>

  <div className="flex items-center ml-auto">
    <input
      type="text"
      placeholder="Last Month"
      className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
       />
     </div>
    </div>

  
    <div className="flex gap-4  ">
  <div className="flex-grow bg-white rounded-lg shadow p-10">
    <div className="text-l  text-gray-500">Online orders</div>
    <div className="text-3xl mt-4 font-semibold">231</div>
  </div>
  <div className="flex-grow bg-white rounded-lg shadow p-10">
    <div className="text-l  text-gray-500">Amount received</div>
    <div className="text-3xl mt-4 font-semibold">₹23,92,312.19</div>
  </div>
</div>

      <div className="bg-white mt-4 p-4">
        <h2 className="text-xl font-semibold mb-4">Transactions | This Month</h2>
        <div className="flex justify-between mb-4">
          <input
            className="flex  h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-1/4"
            placeholder="Search by order ID..."
          />
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Sort
          </button>
        </div>
        <div className="relative w-full overflow-auto bg-gray-100">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Order ID
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Order date
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Order amount
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Transaction fees
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0"></tbody>
          </table>
        </div>
        <hr />
       {renderPrices()}
       <hr/>
     

        <div className="flex justify-between items-center mt-4">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Previous
          </button>
          <div className="flex space-x-1">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              1
            </button>
            <span>...</span>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              10
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              11
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              12
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              13
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              14
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              15
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              16
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              17
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              18
            </button>
            <span>...</span>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Inventory