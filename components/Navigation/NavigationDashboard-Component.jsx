import loadable from '@loadable/component'
import { useRouter } from 'next/router'

import { VscHome, VscCalendar, VscOutput, VscFeedback, VscNote, VscGraph, VscPass } from 'react-icons/vsc'

const Image = loadable(() => import("next/image"))

export default function NavigationDashboard({ children }) {

  const router = useRouter()
  const generalClassNameNav = "w-full flex justify-center lg:justify-start cursor-pointer items-center"
  const currentClassNameNav = generalClassNameNav + " bg-white rounded p-2 lg:px-4 space-x-1 shadow-lg text-gray-600 font-bold"
  const otherClassNameNav = generalClassNameNav + " text-white space-x-2"

  return (
    <>
      <div className="flex items-center justify-between bg-white w-full border-b border-gray-200 container-fluid py-3 px-5">
        <div className="">
          <Image src={"/logo.webp"} height={50} width={75} alt={"Logo"}></Image>
        </div>
        <div className="space-x-1 text-gray-800">
          <span>
            Welcome,
          </span>
          <span>
            Student
          </span>
        </div>
      </div>
      <div className="z-0 flex">
        <div className="min-h-screen bg-main w-20 lg:w-60 space-y-10 p-4 lg:p-5">
          <div className={router.pathname === "/dashboard" ? currentClassNameNav : otherClassNameNav} onClick={() => router.push('/dashboard')}>
            <VscHome size={25}></VscHome>
            <p className="hidden lg:inline">Dashboard</p>
          </div>
          <div className={router.pathname === "/schedule" ? currentClassNameNav : otherClassNameNav} onClick={() => router.push('/schedule')}>
            <VscCalendar size={23}></VscCalendar>
            <p className="hidden lg:inline hover:underline">Schedule</p>
          </div>
          <div className={router.pathname === "/assignment" ? currentClassNameNav : otherClassNameNav}>
            <VscOutput size={23}></VscOutput>
            <p className="hidden lg:inline hover:underline">Assigment</p>
          </div>
          <div className={router.pathname === "/forum" ? currentClassNameNav : otherClassNameNav}>
            <VscFeedback size={23}></VscFeedback>
            <p className="hidden lg:inline hover:underline">Forum</p>
          </div>
          <div className={router.pathname === "/quiz" ? currentClassNameNav : otherClassNameNav}>
            <VscNote size={23}></VscNote>
            <p className="hidden lg:inline hover:underline">Quiz</p>
          </div>
          <div className={router.pathname === "/score-report" ? currentClassNameNav : otherClassNameNav} onClick={() => router.push('/score-report')}>
            <VscGraph size={23}></VscGraph>
            <p className="hidden lg:inline hover:underline">Score Report</p>
          </div>
          <div className={router.pathname === "/attendances" ? currentClassNameNav : otherClassNameNav} onClick={() => router.push('/attendances')}>
            <VscPass size={23}></VscPass>
            <p className="hidden lg:inline hover:underline">Attendances</p>
          </div>
        </div>
        <div className="mx-auto p-5 flex-1">
          <div className="container-fluid">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}