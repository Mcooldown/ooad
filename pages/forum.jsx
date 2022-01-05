import loadable from "@loadable/component";

const Wrapper = loadable(() => import("../components/WrapperDashboard-Component"))
const Button = loadable(() => import("../components/Button"))
const ForumItem = loadable(() => import("../components/Forum-Item"))

export default function Assignment() {
     return (
          <Wrapper title="Learning Management System for School - Assignment" description="Learning Management System for School - Assignment">
               <h1 className="text-main font-bold mb-1">
                    Forum List
               </h1>
               <h4 className="text-gray-500 mb-3">10 IPA 1 - Odd 2021/2022</h4>
               <hr />
               <div className="flex my-3">
                    <select name="" id="" className="rounded-lg shadow border border-gray-300 py-2 px-3 mr-3">
                         <option value="Mathematics">Mathematics</option>
                         <option value="Physics">Physics</option>
                    </select>
                    <Button text="Create New Thread" type={1} />
               </div>
               <ForumItem createdBy={"Vincent Hadinata"} time={"12 December 2021 18:00"} title={"How to do phytagoras? Please teach me how to do it"} />
               <ForumItem createdBy={"Vincent Hadinata"} time={"12 December 2021 20:00"} title={"How can past tense and present tense have been so hard?"} />
               <ForumItem createdBy={"Fernando"} time={"11 December 2021 16:00"} title={"Basketball"} />
          </Wrapper>
     )
}