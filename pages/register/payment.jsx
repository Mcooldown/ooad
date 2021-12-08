
import loadable from '@loadable/component'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { clearDataRegister, getDataRegister } from '../../helper/localStorage'
import { alertQuestion } from '../../helper/sweetalert'

const Wrapper = loadable(()=>import("../../components/Wrapper-Component"))

export default function RegisterPayment(){

  const router = useRouter();

  const renderDataRegister = useMemo(()=>{
    return JSON.parse(getDataRegister())
  },[])

  const atClick = async () => {
    const staQuestion = await alertQuestion("Konfirmasi", "Pastikan kamu telah melakukan pembayaran", "Keluar sekarang", "Tetap disini")
    if(!staQuestion) return
    clearDataRegister()
    router.replace("/")
  }

  return(
    <Wrapper title={"LMan - Payment Page"} description={"Page payment at register school"}>
      <div style={{ backgroundImage: `url("/background.png")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="bg-main min-h-screen w-full">
        <div className="container mx-auto px-5 md:px-10 xl:px-20 pt-5 md:pt-10 pb-10">
          <div className="space-y-5">
            <div className="bg-white p-5 rounded">
              <p className="text-main font-bold text-2xl">
                Payment Summary
              </p>
              <div className="border w-full border-gray-200 my-5"></div>
            
              <div className="md:flex md:justify-between">
                
                <div className="">
                  <div className="space-x-1">
                    <span className="text-gray-600">
                      School Name
                    </span>
                    <span className="text-gray-600 font-bold">
                      {renderDataRegister?.name}
                    </span>
                  </div>
                  <div className="space-x-1 mt-2">
                    <span className="text-gray-600">
                      School Address
                    </span>
                    <span className="text-gray-600 font-bold">
                      {renderDataRegister?.address}
                    </span>
                  </div>
                  <div className="space-x-1 mt-7">
                    <span className="text-gray-600">
                      School Email
                    </span>
                    <span className="text-main font-bold">
                      {renderDataRegister?.email}
                    </span>
                    <span className="text-red-400 font-light">
                      (use this email for login)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-gray-600">
                    Initial Fee:
                  </p>
                  <p className="text-main font-bold text-3xl">
                    Rp.200.000
                  </p>
                </div>

              </div>              

            </div>

            <div className="bg-white p-5 rounded">
              <p className="text-main font-bold text-2xl">
                Transfer Initial Fee
              </p>
              <div className="border w-full border-gray-200 my-5"></div>
              <p className="text-gray-600">
                First, you have to pay initial fee for using this application for your school
              </p>
              <div className="text-gray-800 space-x-1 font-bold mt-5">
                <span className="">
                  Please
                </span>
                <span className="text-main">
                  transfer your initial fee
                </span>
                <span className="">
                  to this bank account.
                </span>
              </div>
              <div className="my-5 w-full md:px-5 space-y-2">
                <div className="space-x-1 text-gray-800 font-semibold">
                  <span>Bank Name</span>
                  <span className="text-main">BCA</span>
                </div>
                <div className="space-x-1 text-gray-800 font-semibold">
                  <span>Bank Account Name</span>
                  <span className="text-main">LMS FOR SCHOOL</span>
                </div>
                <div className="space-x-1 text-gray-800 font-semibold">
                  <span>Bank Account Number</span>
                  <span className="text-main">5272738xxxx</span>
                </div>
              </div>
              <div className="bg-red-400 bg-opacity-50 rounded-md p-5">
                <p className="text-red-500 text-sm">
                  Please transfer your payment before 24hrs from now. If we haven’t received your transfer after 24hrs from now, your registration automatically canceled 
                </p>
              </div>
            </div>

            <button onClick={atClick} className="w-full text-main bg-white px-4 py-2 cursor-pointer hover:text-blue-500">
              YES, I GOT IT
            </button>

          </div>
        </div>
      </div>
    </Wrapper>
  )
}