import loadable from "@loadable/component";

const Wrapper = loadable(() => import("../components/WrapperDashboard-Component"))

export default function Schedule() {
     return (
          <Wrapper title="Learning Management System for School - Attendances" description="Learning Management System for School - Attendances">
               <h1 className="text-main font-bold mb-1">
                    Attendance List
               </h1>
               <h4 className="text-gray-500 mb-3">10 IPA 1 - Odd 2021/2022</h4>
               <hr />
               <table class="table-auto w-full text-center mt-4">
                    <thead className="bg-gray-100">
                         <tr>
                              <th className="py-2 font-normal text-gray-500">No</th>
                              <th className="py-2 font-normal text-gray-500">Date</th>
                              <th className="py-2 font-normal text-gray-500">Status</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr className="hover:bg-gray-100">
                              <td className="py-3 text-gray-500">1</td>
                              <td className="py-3 text-gray-500">15 December 2021</td>
                              <td className="py-3 text-blue-500">Present</td>
                         </tr>
                         <tr className="hover:bg-gray-100">
                              <td className="py-3 text-gray-500">2</td>
                              <td className="py-3 text-gray-500">16 December 2021</td>
                              <td className="py-3 text-blue-500">Present</td>
                         </tr>
                         <tr className="hover:bg-gray-100">
                              <td className="py-3 text-gray-500">3</td>
                              <td className="py-3 text-gray-500">17 December 2021</td>
                              <td className="py-3 text-red-500">Absent</td>
                         </tr>
                    </tbody>
               </table>
          </Wrapper>
     )
}