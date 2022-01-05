import loadable from "@loadable/component";

const Button = loadable(() => import("../components/Button"))

export default function AssignmentItem({ title, course, dueDate, isCompleted }) {
     return (
          <div className="rounded-lg border-transparent shadow p-3 my-3">
               <div className="grid grid-cols-12 justify-between items-center">
                    <div className="lg:col-span-3 col-span-12">
                         <p>{title}</p>
                         <small className="text-gray-500 mt-0">{course}</small>
                    </div>
                    <div className="lg:col-span-4 col-span-12 flex text-center items-center justify-center">
                         <div className="px-3">
                              <small className="text-gray-500 font-bold">Status</small> <br />
                              {
                                   isCompleted ?
                                        <small className="font-bold text-green-500">Submitted</small>
                                        :
                                        <small className="font-bold text-red-500">Not Submitted</small>
                              }
                         </div>
                         <div className="px-3">
                              <small className="text-gray-500 font-bold">Due Date</small> <br />
                              <small className="font-bold text-red-500">{dueDate}</small>
                         </div>
                    </div>
                    <div className="lg:col-span-5 col-span-12 flex items-center justify-end">
                         {
                              isCompleted ?
                                   <div className="mr-2">
                                        <Button text={"Download Answer"} type={2} />
                                   </div>
                                   : null
                         }
                         <div className="mr-2">
                              <Button text={"Download Assignment File"} type={2} />
                         </div>
                         <Button text={"Submit"} type={1} />
                    </div>
               </div>
          </div>
     )
}