import {useState} from 'react'
import {isFormatEmail} from '../../helper/converter'

export default function InputEmail({title, setResult}){
  
  const [value, setValue] = useState("")
  const [note, setNote] = useState("")  

  const atChangeValue = (val) => {           
    
    setValue(val)

    if(String(val).length === 0){
      setNote(`Data ${title} tidak boleh kosong`)
      setResult({data:"", status:false})      
      return
    }
    
    if(!isFormatEmail(val)){
      setNote(`Format email tidak sesuai`)      
      setResult({data:val, status:false})

      return
    }

    setNote("")
    setResult({data:val, status:true})
    return

  }

  return(
    <div className="">
      <p className="text-gray-800 mb-2">
        {title}
      </p>
      <div className="flex border border-gray-400 rounded hover:border-blue-400 focus:border-transparent focus:ring-2 focus:ring-blue-300 outline-none">
        <input type="text" value={value} onChange={(e)=>atChangeValue(e?.target?.value)} className="text-gray-800 px-2 py-2 text-sm flex-1 outline-none rounded-l focus:border-transparent focus:ring-2 focus:ring-blue-300" />
        {/* <div className="rounded-r px-4 py-2 bg-gray-200">
          <p className="text-sm md:text-base">Gram</p>
        </div> */}
      </div>
      <p className="text-red-400 text-xs mt-1">
        {note}
      </p>
    </div>
  )
  

}