export default function NotFoundComponent({ mutate }) {

  mutate = (mutate || null)

  return (
    <div className="flex justify-center my-40 ">

      <div className="">

        <p className="text-4xl font-semibold text-gray-800 text-center">
          Empty Data
        </p>

        <p className="text-gray-800 mt-2 text-center">
          Sorry, the data is not available for now, please try again later.
        </p>

        <div className="mt-5 flex justify-center">
          <button onClick={async () => { await mutate() }} className="text-white bg-blue-500 rounded text-sm font-semibold hover:bg-blue-600 px-4 py-2">
            Refresh Now
          </button>
        </div>

      </div>

    </div>
  )
}