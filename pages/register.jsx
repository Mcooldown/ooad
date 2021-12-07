import {useState} from 'react'
import {useRouter} from 'next/router'
import loadable from '@loadable/component'

const Wrapper = loadable(() => import("../components/Wrapper-Component"))
const InputText = loadable(() => import("../components/Input/InputText-Component"))
const InputLargeText = loadable(() => import("../components/Input/InputLargeText-Component"))
const InputEmail = loadable(() => import("../components/Input/InputEmail-Component"))
const InputPassword = loadable(() => import("../components/Input/InputPassword-Component"))

function Register() {

  const router = useRouter();

  const [name, setName] = useState({data:"", status:false})
  const [email, setEmail] = useState({data:"", status:false})
  const [address, setAddress] = useState({data:"", status:false})
  const [password, setPassword] = useState({data:"", status:false})
  const [cpassword, setCpassword] = useState({data:"", status:false})

  return (
    <Wrapper title={"Landing LMan - Selamat datang di website pengelolaan kami"} description={"Aplikasi ini merupakan sebuah management school di seluruh indonesia"}>
      <div style={{ backgroundImage: `url("./background.png")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="bg-main min-h-screen w-full">
        <div className="container mx-auto px-5 md:px-10 xl:px-20 pt-5">
          <div className="w-full md:w-96 lg:w-1/2 xl:w-1/3 bg-white mx-auto px-10 py-10 rounded mt-5 md:mt-20">
            
            <p className="text-main font-bold text-2xl mb-7">
              REGISTER SCHOOL
            </p>

            <div className="space-y-3">                            
              <InputText title={"School Name"} setResult={setName}></InputText>
              <InputEmail title={"School Email"} setResult={setEmail} ></InputEmail>
              <InputLargeText title={"School Address"} setResult={setAddress}></InputLargeText>
              <InputPassword title={"Password"} setResult={setPassword} ></InputPassword>              
              <InputPassword title={"Confirm Password"} setResult={setCpassword} ></InputPassword>              
            </div>            

            <button className="mt-7 w-full px-4 py-2 text-sm font-bold bg-main hover:bg-second cursor-pointer text-white rounded">
              PROCEED TO PAYMENT
            </button>

            <div className="mt-2 text-xs space-x-1 text-center">              
              <span className="text-gray-800">
                Already have account?
              </span>              
              <span onClick={()=>router.push("/")} className="text-main cursor-pointer hover:underline">
                Login
              </span>              
            </div>


          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Register
