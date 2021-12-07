import React, { useRef, useState } from 'react'

import loadable from '@loadable/component';

const Image = loadable(()=>import("next/image"))

function ImagePickerComponent({setFile, label}) {

  const [imageAddress, setImageAddress] = useState(null);

  const inputRefUploadImage = useRef(null)

  const atClickUploadHandler = () => {
    inputRefUploadImage?.current?.click()
  }

  const atChangeFile = (e) => {
    const fileStrem = e.target?.files[0];   
    setFile(fileStrem);
    const reader = new FileReader();        
    reader.addEventListener('load', function(){      
      setImageAddress(this.result);
    });
    reader.readAsDataURL(fileStrem);
  }

  return (
    <div>
      <div className="mt-1 flex items-center">
      
        <label className="font-medium text-gray-600">
          {label}
        </label>
        
        <button onClick={atClickUploadHandler} className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
          Pilih Foto
        </button>

        <input  onChange={atChangeFile} ref={inputRefUploadImage} accept="image/*" type="file" hidden/>

        </div>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
            {imageAddress?
            <Image  src={imageAddress} alt="Image Preview" className="object-scale-down" height={600} width={600} />   
            :                    
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
          
              <p className="text-xs text-gray-500">
                PNG or JPG up to 2MB
              </p>
            </div>
          }
      </div>
    </div>
  )
}

export default ImagePickerComponent
