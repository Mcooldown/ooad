export default function ScheduleDay({ day, children }) {
     return (
          <div className="rounded-lg border-transparent shadow p-3">
               <h2 className="text-main font-bold mb-1">
                    {day}
               </h2>
               <hr />
               {children}
          </div>
     )
}