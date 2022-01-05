import React, { useState } from 'react'

import loadable from '@loadable/component'

import { SiInstagram, SiYoutube, SiTiktok } from 'react-icons/si'
import { useRouter } from 'next/router'
import { alertSuccess } from '../helper/sweetalert'

const Image = loadable(() => import("next/image"))

function FooterComponent() {

  const router = useRouter()

  const [email, setEmail] = useState("")

  const handlerSubscirbe = async () => {
    await alertSuccess("Thank you", "Please wait for more information about our Learning Management System")
    setEmail("")
  }

  return (
    <div className="container px-5 md:px-10 xl:px-20">
      <div className="bg-white inset-x-0 bottom-0 md:pt-10 w-full border-t md:mt-10 border-gray-100">
        <div className="md:space-y-10 md:space-y-0 md:flex lg:space-x-10">
          <div className="w-full md:w-1/4 space-y-5 hidden lg:block">
            <Image onClick={() => router.push("/")} src={"/logo-text.webp"} width={200} height={35} alt="Logo Gadai Syariah Indonesia"></Image>
            <div onClick={() => router.push("/other/term")} className="flex space-x-1 text-gray-600 font-light cursor-pointer">
              <p>Term</p>
              <p>.</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-3">
                <p className="text-black">
                  Products
                </p>
                <p onClick={() => router.push("/produk/gadai/emas")} className="text-gray-600 font-light cursor-pointer">
                  Login
                </p>
                <p onClick={() => router.push("/produk/gadai/haji")} className="text-gray-600 font-light cursor-pointer">
                  Register
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-black">
                  Resources
                </p>
                <p onClick={() => router.push("/artikel")} className="text-gray-600 font-light cursor-pointer">
                  Article
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-black">
                  Company
                </p>
                <p onClick={() => router.push("/other/tentang")} className="text-gray-600 font-light cursor-pointer">
                  About
                </p>
                <p onClick={() => router.push("/other/faq")} className="text-gray-600 font-light cursor-pointer">
                  FAQ
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 space-y-5">
            <p className="text-gray-900">
              Subscribe
            </p>
            <p className="text-gray-600 font-light">
              Get more information and news about our LMS
            </p>
            <div className="space-x-0 flex">
              <input value={email} onChange={(e) => setEmail(e?.target?.value)} type="email" placeholder="Email kamu" className="w-full border border-gray-200 px-4 py-2 rounded-l" />
              <button onClick={() => handlerSubscirbe()} className="text-white bg-blue-400 hover:bg-blue-600 rounded-r text-sm px-4 py-2">
                Kirim
              </button>
            </div>
          </div>
        </div>
        <div className="w-full border border-gray-50 mt-10 mb-5"></div>
        <div className="flex justify-between mb-5">
          <div className="">
            <p className="text-gray-500 font-light text-xs">2021 LMS for School. All rights reserved</p>
          </div>
          <div className="space-x-5 flex">
            <div className="rounded-full shadow p-1">
              <a href="https://www.youtube.com/channel/UCehOIOxBM9bLEZSaFuyu6DA" target="_blank" rel="noopener noreferrer" >
                <SiYoutube size={20}></SiYoutube>
              </a>
            </div>
            <div className="rounded-full shadow p-1">
              <a href="https://instagram.com/gadaisyariahindonesia?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" >
                <SiInstagram size={20}></SiInstagram>
              </a>
            </div>
            <div className="rounded-full shadow p-1">
              <a href="https://www.tiktok.com/@gadaisyariah.id?" target="_blank" rel="noopener noreferrer" >
                <SiTiktok size={20}></SiTiktok>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent
