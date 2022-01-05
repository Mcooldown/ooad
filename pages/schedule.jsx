import loadable from "@loadable/component";

const Wrapper = loadable(() => import("../components/WrapperDashboard-Component"))
const ScheduleItem = loadable(() => import("../components/Schedule-Item"));
const ScheduleDay = loadable(() => import("../components/Schedule-Day"));

export default function Schedule() {
     return (
          <Wrapper title="Learning Management System for School - Schedule" description="Learning Management System for School - Schedule">
               <h1 className="text-main font-bold mb-1">
                    Schedule
               </h1>
               <h4 className="text-gray-500 mb-3">10 IPA 1 - Odd 2021/2022</h4>
               <hr />
               <div className="grid grid-cols-3 gap-4 mt-4">
                    <ScheduleDay day={"Monday"}>
                         <ScheduleItem course={"Mathematics"} teacher={"Agus Budi"} start={"08.00"} end={"10.30"} />
                         <ScheduleItem course={"Physics"} teacher={"Novita H"} start={"11.00"} end={"12.30"} />
                         <ScheduleItem course={"Chemistry"} teacher={"Benny A"} start={"13:00"} end={"14.30"} />
                    </ScheduleDay>
                    <ScheduleDay day={"Tuesday"}>
                         <ScheduleItem course={"English"} teacher={"Thomas B"} start={"08.00"} end={"10.00"} />
                         <ScheduleItem course={"Biology"} teacher={"Putu"} start={"10.30"} end={"12.30"} />
                         <ScheduleItem course={"Indonesian"} teacher={"Reza"} start={"13:00"} end={"14.30"} />
                         <ScheduleItem course={"Mathematics"} teacher={"Agus Budi"} start={"14:30"} end={"15.00"} />
                    </ScheduleDay>
                    <ScheduleDay day={"Wednesday"}>
                         <ScheduleItem course={"Physical Education"} teacher={"Fernando"} start={"08.00"} end={"10.00"} />
                         <ScheduleItem course={"History of Indonesia"} teacher={"Agung T"} start={"10.30"} end={"12.00"} />
                         <ScheduleItem course={"Chemistry"} teacher={"Benny A"} start={"12:30"} end={"14.00"} />
                    </ScheduleDay>
                    <ScheduleDay day={"Thursday"}>
                         <ScheduleItem course={"Information Technology"} teacher={"Felix Bingo"} start={"08.00"} end={"10.00"} />
                         <ScheduleItem course={"Physics"} teacher={"Novita H"} start={"10.30"} end={"12.00"} />
                         <ScheduleItem course={"English"} teacher={"Thomas B"} start={"13:00"} end={"14.00"} />
                         <ScheduleItem course={"Entrepreneurship"} teacher={"Maudy L"} start={"14:30"} end={"15.00"} />
                    </ScheduleDay>
                    <ScheduleDay day={"Friday"}>
                         <ScheduleItem course={"Biology"} teacher={"Putu"} start={"08.00"} end={"10.00"} />
                         <ScheduleItem course={"Civics Education"} teacher={"Budi J"} start={"10.30"} end={"11.30"} />
                         <ScheduleItem course={"Religious Education"} teacher={"Anthony B"} start={"12:00"} end={"13.30"} />
                         <ScheduleItem course={"Music"} teacher={"Yovie J"} start={"13:30"} end={"15.00"} />
                    </ScheduleDay>
                    <ScheduleDay day={"Saturday"}>
                         <ScheduleItem course={"Indonesian"} teacher={"Reza"} start={"08.00"} end={"10.00"} />
                         <ScheduleItem course={"Mandarin"} teacher={"Dao Ming Tse"} start={"10.30"} end={"11.30"} />
                         <ScheduleItem course={"Japanese"} teacher={"Nobita"} start={"11:30"} end={"13.00"} />
                    </ScheduleDay>
               </div>
          </Wrapper>
     )
}