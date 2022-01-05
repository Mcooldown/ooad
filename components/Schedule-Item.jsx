export default function ScheduleItem({ course, teacher, start, end }) {
     return (
          <div className="flex justify-between items-center my-3">
               <div>
                    <p>{course}</p>
                    <small className="text-gray-500 mt-0">Teacher: {teacher}</small>
               </div>
               <h5 className="text-gray-500 font-bold">{start} - {end}</h5>
          </div>
     )
}