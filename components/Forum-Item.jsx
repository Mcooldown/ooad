import loadable from "@loadable/component";

const Button = loadable(() => import("../components/Button"))

export default function ForumItem({ createdBy, time, title }) {
     return (
          <div className="rounded-lg border-transparent shadow p-3 my-3">
               <div className="lg:flex justify-between items-center">
                    <div>
                         <small className="text-gray-500 mt-0">{createdBy}
                              <br />
                              {time}
                         </small>
                         <p className="mt-3">{title}</p>
                    </div>
                    <div>
                         <div className="mr-2">
                              <Button text={"Details"} type={2} />
                         </div>
                    </div>
               </div>
          </div>
     )
}