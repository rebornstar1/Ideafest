import React from 'react'
import Data from '../Components/Sidebar.jsx/Data'
import AnaImg from '../Components/Sidebar.jsx/svgpics/Anaimg.png'
import PartImg from '../Components/Sidebar.jsx/svgpics/Partners.png'
import FedImg from '../Components/Sidebar.jsx/svgpics/Feedback.png'
import INvImg from '../Components/Sidebar.jsx/svgpics/Investors.png'
import SimImg from '../Components/Sidebar.jsx/svgpics/Simstart.png'
import Analytics from '../Components/Dashboard/Analytics'
import Updates from '../Components/Dashboard/Updates'
import Revenue from '../Components/Dashboard/Revenue'

function Dashboard() {
  return (
    <div className='bg-[#FDF5E6] font-montserrat'>
    <div className='flex flex-wrap gap-4 p-2 md:p-4'>
        <div className='bg-[#FFFFFF] w-1/6 rounded-lg shadow-md'>
          <Data image={AnaImg} titles={"Analytics"}/>
          <Data image={PartImg} titles={"Partners"}/>
          <Data image={FedImg} titles={"Feedback"}/>
          <Data image={INvImg} titles={"Investors"}/>
          <Data image={SimImg} titles={"Similar Startups"}/>
        </div>
        <div className='flex flex-col lg:w-7/12 w-9/12 gap-4'>
          <div className='bg-[#F0F0F0] rounded-lg shadow-md'>
          <Analytics/>
          </div>
          <div className='bg-[#F0F0F0] rounded-lg shadow-md'>
          <Revenue/>
          </div>
        </div>
        <div className='bg-[#F0F0F0] hidden lg:inline w-1/5 rounded-lg shadow-md'>
         <Updates/>
        </div>
    </div>  
    </div>
  )
}

export default Dashboard
