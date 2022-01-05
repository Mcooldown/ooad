import loadable from "@loadable/component";

const Wrapper = loadable(() => import("../components/WrapperDashboard-Component"))
const AssignmentItem = loadable(() => import("../components/Assignment-Item"))

export default function Assignment() {
     return (
          <Wrapper title="Learning Management System for School - Assignment" description="Learning Management System for School - Assignment">
               <h1 className="text-main font-bold mb-1">
                    Assignment List
               </h1>
               <h4 className="text-gray-500 mb-3">10 IPA 1 - Odd 2021/2022</h4>
               <hr />
               <AssignmentItem title={"Phytagoras Homework"} course={"Mathematics"} isCompleted={false} dueDate={"25 December 2021 23:59"} />
               <AssignmentItem title={"Assignment 2"} course={"English"} isCompleted={false} dueDate={"23 December 2021 23:59"} />
               <AssignmentItem title={"Practicum Report"} course={"Chemistry"} isCompleted={false} dueDate={"22 December 2021 23:59"} />
               <AssignmentItem title={"Practicum Report 1"} course={"Physics"} isCompleted={true} dueDate={"19 December 2021 23:59"} />
               <AssignmentItem title={"Assignment 1"} course={"English"} isCompleted={true} dueDate={"10 December 2021 23:59"} />
          </Wrapper>
     )
}