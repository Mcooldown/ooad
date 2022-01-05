import loadable from "@loadable/component";

const Wrapper = loadable(() => import("../components/WrapperDashboard-Component"))

export default function Quiz() {
     return (
          <Wrapper title="Learning Management System for School - Assignment" description="Learning Management System for School - Assignment">
               <h1 className="text-main font-bold mb-1">
                    Quiz
               </h1>
               <h4 className="text-gray-500 mb-3">10 IPA 1 - Odd 2021/2022</h4>
               <hr />
          </Wrapper>
     )
}