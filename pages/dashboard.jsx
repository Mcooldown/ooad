import loadable from "@loadable/component";
import { VscCalendar, VscOutput, VscFeedback, VscNote } from "react-icons/vsc";
import { useRouter } from 'next/router'

const Wrapper = loadable(() => import("../components/WrapperDashboard-Component"))
const Button = loadable(() => import("../components/Button"))

export default function Dashboard() {
  const router = useRouter();

  return (
    <Wrapper title="Learning Management System for School - Dashboard" description="Learning Management System for School - Dashboard">
      <div className="flex items-center mb-3">
        <div style={{ width: "120px", height: "120px", backgroundColor: "gray", borderRadius: "50%" }}>
        </div>
        <div className="ml-5">
          <h1 className="text-main font-bold mb-2 text-3xl">
            Vincent Hadinata
          </h1>
          <h4 className="text-gray-500 mb-3">Student - Binus School - 10 IPA 1 - Odd 2021/2022</h4>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 mt-3 gap-3">
        <div className="lg:col-span-1 col-span-2">
          <div className="rounded-lg border-transparent shadow p-3">
            <h2 className="text-main font-bold mb-1 inline-flex items-center">
              <VscCalendar size={23}></VscCalendar>&nbsp;&nbsp;Today's Schedule
            </h2>
            <hr />
            <div className="flex justify-between items-center my-3">
              <div>
                <p>Mathematics</p>
                <small className="text-gray-500 mt-0">Teacher: Agus Budi</small>
              </div>
              <h5 className="text-gray-500 font-bold">08.00 - 09.00</h5>
            </div>
            <div className="flex justify-between items-center my-3">
              <div>
                <p>Physics</p>
                <small className="text-gray-500 mt-0">Teacher: Novita H</small>
              </div>
              <h5 className="text-gray-500 font-bold">10.00 - 12.00</h5>
            </div>
            <div className="flex justify-between items-center my-3">
              <div>
                <p>Chemistry</p>
                <small className="text-gray-500 mt-0">Teacher: Benny A</small>
              </div>
              <h5 className="text-gray-500 font-bold">12.00 - 14.00</h5>
            </div>
            <hr />
            <div className="flex justify-end mt-2">
              <Button type={1} text={"See All Schedule"} onClick={() => router.push('/schedule')} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2">
          <div className="rounded-lg border-transparent shadow p-3">
            <h2 className="text-main font-bold mb-1 inline-flex items-center">
              <VscOutput size={23}></VscOutput>&nbsp;&nbsp;Uncompleted Assignment
            </h2>
            <hr />
            <div className="flex justify-between items-center my-3">
              <div>
                <p>Phytagoras Homework</p>
                <small className="text-gray-500 mt-0">Mathematics</small>
              </div>
              <small className="text-right">
                <span className="text-gray-500">Due date:</span> <br />
                <span className="text-red-500 font-bold">25 December 2021 23:59</span>
              </small>
            </div>
            <div className="flex justify-between items-center my-3">
              <div>
                <p>Assignment 2</p>
                <small className="text-gray-500 mt-0">Physics</small>
              </div>
              <small className="text-right">
                <span className="text-gray-500">Due date:</span> <br />
                <span className="text-red-500 font-bold">23 December 2021 23:59</span>
              </small>
            </div>
            <div className="flex justify-between items-center my-3">
              <div>
                <p>Practicum Report</p>
                <small className="text-gray-500 mt-0">Chemistry</small>
              </div>
              <small className="text-right">
                <span className="text-gray-500">Due date:</span> <br />
                <span className="text-red-500 font-bold">22 December 2021 23:59</span>
              </small>
            </div>
            <hr />
            <div className="flex justify-end mt-2">
              <Button type={1} text={"See All Assignments"} onClick={() => router.push('/assignment')} />
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className="grid grid-cols-7 gap-3">
        <div className="lg:col-span-4 col-span-12">
          <div className="rounded-lg border-transparent shadow p-3">
            <h2 className="text-main font-bold mb-1 inline-flex items-center">
              <VscFeedback size={23}></VscFeedback>&nbsp;&nbsp;Latest Forum Threads
            </h2>
            <hr />
            <div className="flex justify-between items-center my-3">
              <div>
                <p>How to do phytagoras? Please teach me how to do it</p>
                <small className="text-gray-500 mt-0">Created at 12 December 2021 18:00 by Vincent Hadinata</small>
              </div>
              <h6 className="text-gray-500 font-bold">Mathematics</h6>
            </div>
            <div className="flex justify-between items-center my-3">
              <div>
                <p>How can past tense and present tense have been so hard?</p>
                <small className="text-gray-500 mt-0">Created at 12 December 2021 20:00 by Vincent Hadinata</small>
              </div>
              <h5 className="text-gray-500 font-bold">English</h5>
            </div>
            <hr />
            <div className="flex justify-end mt-2">
              <Button type={1} text={"See All Forum Threads"} onClick={() => router.push('/forum')} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-12">
          <div className="rounded-lg border-transparent shadow p-3">
            <h2 className="text-main font-bold mb-1 inline-flex items-center">
              <VscNote size={23}></VscNote>&nbsp;&nbsp;Quiz
            </h2>
            <hr />
            <div className="flex justify-between items-center my-3">
              <div>
                <p>Quiz 1 - Mathematics</p>
                <small className="text-gray-500 mt-0">Due Date: <span className="text-red-500">22 December 2021 23.59</span></small>
              </div>
              <Button type={1} text={"Start Now"} />
            </div>
            <div className="flex justify-between items-center my-3">
              <div>
                <p>Quiz 2 - Chemistry</p>
                <small className="text-gray-500 mt-0">Due Date: <span className="text-red-500">21 December 2021 10.00</span></small>
              </div>
              <Button type={1} text={"Start Now"} />
            </div>
            <hr />
            <div className="flex justify-end mt-2">
              <Button type={1} text={"See All Quiz"} onClick={() => router.push('/quiz')} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}