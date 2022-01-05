import loadable from '@loadable/component'
import { useRouter } from 'next/router'

const Image = loadable(() => import("next/image"))

export default function NavigationLanding() {

  const router = useRouter()

  return (
    <div className="flex items-center justify-between bg-white w-full border-b border-gray-200 md:px-10 xl:px-20 container-fluid py-3 px-5">
      <div className="">
        <Image src={"/logo.webp"} height={50} width={75} alt={"Logo"}></Image>
      </div>
      <div className="space-x-3">
        <button onClick={() => router.push("/")} className="bg-white text-main font-bold text-sm px-4 py-2 rounded border border-main cursor-pointer hover:bg-main hover:text-white">
          Login
        </button>
        <button onClick={() => router.push("/register")} className="bg-main text-white font-bold px-4 py-2 rounded text-sm cursor-pointer hover:bg-second hidden md:inline">
          Register School
        </button>
      </div>
    </div>
  )
}