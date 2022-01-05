export default function ScoreItem({ course, teacher, assignment, mid, final }) {
     return (
          <div className="rounded-lg border-transparent shadow p-3 mb-3">
               <div className="lg:flex justify-between items-center">
                    <div>
                         <p>{course}</p>
                         <small className="text-gray-500 mt-0">Teacher: {teacher}</small>
                    </div>
                    <div className="flex text-center">
                         <div className="px-3">
                              <small className="text-gray-500 font-bold">Assignment</small>
                              <h4 className="text-main font-bold text-3xl">{assignment}</h4>
                         </div>
                         <div className="px-3">
                              <small className="text-gray-500 font-bold">Mid Exam</small>
                              <h4 className="text-main font-bold text-3xl">{mid}</h4>
                         </div>
                         <div className="px-3">
                              <small className="text-gray-500 font-bold">Final Exam</small>
                              <h4 className="text-main font-bold text-3xl">{final}</h4>
                         </div>
                    </div>
               </div>
          </div>
     )
}