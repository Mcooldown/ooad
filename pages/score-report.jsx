import loadable from "@loadable/component";

const Wrapper = loadable(() => import("../components/WrapperDashboard-Component"))
const ScoreItem = loadable(() => import("../components/Score-Item"))

export default function ScoreReport() {
     return (
          <Wrapper title="Learning Management System for School - Score Report" description="Learning Management System for School - Score Report">
               <h1 className="text-main font-bold mb-1">
                    Score Report
               </h1>
               <h4 className="text-gray-500 mb-3">10 IPA 1 - Odd 2021/2022</h4>
               <hr />
               <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-4 my-3">
                         <ScoreItem course={"Mathematics"} teacher={"Agus Budi"} assignment={85} mid={80} final={90} />
                         <ScoreItem course={"Physics"} teacher={"Novita H"} assignment={85} mid={68} final={78} />
                         <ScoreItem course={"Biology"} teacher={"Putu"} assignment={100} mid={98} final={90} />
                         <ScoreItem course={"English"} teacher={"Putu"} assignment={90} mid={88} final={95} />
                         <ScoreItem course={"Indonesian"} teacher={"Reza"} assignment={95} mid={100} final={100} />
                         <ScoreItem course={"Physical Education"} teacher={"Fernando"} assignment={80} mid={80} final={85} />

                    </div>
                    <div className="col-span-2 my-3">
                         <div className="rounded-lg border-transparent shadow p-3">
                              <h2 className="text-main font-bold mb-1">
                                   Overall
                              </h2>
                              <hr />
                              <p className="mt-2">Average Score:</p>
                              <h1 className="text-main font-bold my-1 text-5xl">
                                   80
                              </h1>
                              <small className="text-gray-500">
                                   Your achievement is pretty good. Keep improving to get perfect score.
                              </small>
                         </div>
                    </div>
               </div>
          </Wrapper>
     )
}