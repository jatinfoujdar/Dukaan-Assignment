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
import Price from './Price';



const Inventory = () => {

  const renderPrices = () => {
    return Array.from({ length: 20 }, (_, index) => <Price key={index} />);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className=" w-64 px-8 py-4 bg-[#363740]  text-white">
      <div className="flex items-center space-x-2 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-8 w-8"
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" x2="4" y1="22" y2="15"></line>
        </svg>
        <span className="font-bold">Nishyan</span>
      </div>
      <div className="space-y-4 ">
      <a className=" flex items-center" href="#" rel="ugc">
            <GoHome className="h-5 w-5 mr-2" /> Home
          </a>
        <a className=" flex items-center" href="#" rel="ugc">
        <BsClipboard2DataFill className=" h-5 w-5 mr-2"/>  Orders
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
         <TbCategory className=" h-5 w-5 mr-2"/> Products
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
         <HiOutlineTruck className=" h-5 w-5 mr-2"/> Delivery
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
         <PiSpeakerHighBold className=" h-5 w-5 mr-2"/> Marketing
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
        <HiOutlineChartBar className=" h-5 w-5 mr-2"/>  Analytics
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
        <MdPayments className=" h-5 w-5 mr-2"/>  Payments
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
         <TfiLocationArrow className=" h-5 w-5 mr-2"/> Tools
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
        <TbDiscount2 className=" h-5 w-5 mr-2"/>  Discounts
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
        <FaUserFriends className=" h-5 w-5 mr-2"/>  Audience
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
        <IoColorPaletteSharp className=" h-5 w-5 mr-2"/>  Appearance
        </a>
        <a className=" flex items-center" href="#" rel="ugc">
        <HiOutlineLightningBolt className=" h-5 w-5 mr-2"/>  Plugins
        </a>
      </div>
      <div className="absolute bottom-0 left-0 p-8">
        <span className="text-sm">Available credits</span>
        <span className="block font-bold">₹222.10</span>
      </div>
    </nav>
    
    <div className="flex-1 px-8 py-4">
      
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


  <BsClipboard2DataFill className="mr-20" /> 
  <GoHome className="ml-2" /> 
  </div>
  
  <hr/>
  
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