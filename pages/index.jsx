import { useState } from 'react'
import loadable from '@loadable/component'
import { useRouter } from 'next/router'

const Wrapper = loadable(() => import("../components/Wrapper-Component"))
const InputEmail = loadable(() => import("../components/Input/InputEmail-Component"))
const InputPassword = loadable(() => import("../components/Input/InputPassword-Component"))

function Main() {

  const router = useRouter()

  const [email, setEmail] = useState({ data: "", status: false })
  const [password, setPassword] = useState({ data: "", status: false })

  return (
    <Wrapper title={"Learning Management System for School - Login"} description={"Learning Management System for School - Login"}>
      <div style={{ backgroundImage: `url("./background.png")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="bg-main min-h-screen w-full">
        <div className="container mx-auto px-5 md:px-10 xl:px-20 pt-5">
          <div className="w-full md:w-96 bg-white mx-auto px-10 py-10 rounded mt-5 md:mt-20">

            <p className="text-main font-bold text-2xl mb-7">
              LOGIN
            </p>

            <div className="space-y-3">
              <InputEmail title={"Email"} setResult={setEmail} ></InputEmail>
              <InputPassword title={"Password"} setResult={setPassword} ></InputPassword>
              <div className="flex justify-end">
                <p onClick={() => router.push("/forgot")} className="text-main cursor-pointer text-sm hover:underline">
                  Forgot Password?
                </p>
              </div>
            </div>

            <button className="mt-7 w-full px-4 py-2 text-sm font-bold bg-main hover:bg-second cursor-pointer text-white rounded">
              LOGIN
            </button>

            <div className="mt-2 text-xs space-x-1 text-center">
              <span className="text-gray-800">
                Don’t have an account?
              </span>
              <span onClick={() => router.push("/register")} className="text-main cursor-pointer hover:underline">
                Register your school first
              </span>
            </div>


          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Main
