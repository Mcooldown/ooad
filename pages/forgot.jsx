import {useState} from 'react'
import loadable from '@loadable/component'
import { useRouter } from 'next/router'

const Wrapper = loadable(() => import("../components/Wrapper-Component"))
const InputEmail = loadable(() => import("../components/Input/InputEmail-Component"))

export default function Forgot() {

  const router = useRouter();

  const [email, setEmail] = useState({data:"", status:false})  

  return (
    <Wrapper title={"Landing LMan - Selamat datang di website pengelolaan kami"} description={"Aplikasi ini merupakan sebuah management school di seluruh indonesia"}>
      <div style={{ backgroundImage: `url("./background.png")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="bg-main min-h-screen w-full">
        <div className="container mx-auto px-5 md:px-10 xl:px-20 pt-5">
          <div className="w-full md:w-96 bg-white mx-auto px-10 py-10 rounded mt-5 md:mt-20">
            
            <p className="text-main font-bold text-2xl mb-7">
              FORGOT PASSWORD
            </p>

            <div className="space-y-3">                            
              <InputEmail title={"Email"} setResult={setEmail} ></InputEmail>              
            </div>            

            <button className="mt-7 w-full px-4 py-2 text-sm font-bold bg-main hover:bg-second cursor-pointer text-white rounded">
              KIRIM VERIFIKASI
            </button>            
            <button onClick={()=>router.push("/")} className="mt-2 w-full px-4 py-2 text-sm font-bold text-main bg-white border border-main hover:bg-main hover:text-white cursor-pointer rounded">
              KEMBALI
            </button>            


          </div>
        </div>
      </div>
    </Wrapper>
  )
}
