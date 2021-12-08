import loadable from '@loadable/component'
import { useRouter } from 'next/router'

import { VscHome, VscCalendar, VscOutput, VscFeedback,VscNote, VscGraph, VscPass } from 'react-icons/vsc'

const Image = loadable(()=>import("next/image"))

export default function NavigationDashboard({children}){

  const router = useRouter()

  return (
    <>
    <div className="flex items-center justify-between bg-white w-full border-b border-gray-200 container py-3">
      <div className="">
        <Image src={"/logo.webp"} height={50} width={75} alt={"Logo"}></Image>
      </div>
      <div className="space-x-1 text-gray-800">
        <span>
          Welcome, 
        </span>
        <span>
          [Email]
        </span>
      </div>
    </div>
    <div className="z-0 flex">
      <div className="h-screen bg-main w-20 lg:w-60 space-y-10 p-4 lg:p-5">
        <div className="w-full bg-white rounded p-2 lg:px-4 flex justify-center lg:justify-start space-x-1 items-center shadow-lg text-gray-600 cursor-pointer font-bold">
          <VscHome size={25}></VscHome>
          <p className="hidden lg:inline">Dashboard</p>
        </div>
        <div className="w-full flex justify-center lg:justify-start text-white cursor-pointer space-x-2  items-center ">
          <VscCalendar size={23}></VscCalendar>
          <p className="hidden lg:inline hover:underline">Schedule</p>
        </div>
        <div className="w-full  flex justify-center lg:justify-start text-white cursor-pointer space-x-2  items-center">
          <VscOutput size={23}></VscOutput>
          <p  className="hidden lg:inline hover:underline">Assigment</p>
        </div>
        <div className="w-full  flex justify-center lg:justify-start text-white cursor-pointer space-x-2  items-center">
          <VscFeedback size={23}></VscFeedback>
          <p  className="hidden lg:inline hover:underline">Forum</p>
        </div>
        <div className="w-full flex justify-center lg:justify-start text-white cursor-pointer space-x-2  items-center">
          <VscNote size={23}></VscNote>
          <p className="hidden lg:inline hover:underline">Quiz</p>
        </div>
        <div className="w-full flex justify-center lg:justify-start text-white cursor-pointer space-x-2  items-center">
          <VscGraph size={23}></VscGraph>
          <p className="hidden lg:inline hover:underline">Score Report</p>
        </div>
        <div className="w-full flex justify-center lg:justify-start text-white cursor-pointer space-x-2  items-center">
          <VscPass size={23}></VscPass>
          <p className="hidden lg:inline hover:underline">Attendances</p>
        </div>
      </div>
      <div className="container mx-auto p-5 flex-1">
        {children}
      </div>      
    </div> 
    </>
  )
}