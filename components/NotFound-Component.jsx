export default function NotFoundComponent({mutate}){

  mutate = (mutate||null)

  return(
    <div className="flex justify-center my-40 ">
      
      <div className="">
        
        <p className="text-4xl font-semibold text-gray-800 text-center">
          DATA KOSONG
        </p>

        <p className="text-gray-800 mt-2 text-center">
          Mohon maaf data yang kamu inginkan belum tersedia, Coba beberapa saat lagi
        </p>
        
        <div className="mt-5 flex justify-center">
          <button onClick={async ()=>{await mutate()}} className="text-white bg-blue-500 rounded text-sm font-semibold hover:bg-blue-600 px-4 py-2">
            Segarkan Sekarang
          </button>    
        </div>

      </div>      

    </div>
  )
}