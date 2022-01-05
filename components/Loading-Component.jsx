
export default function LoadingComponent() {
  return (
    <div className="flex min-h-screen">
      <div className="m-auto text-center">
        <div className="loader p-5 rounded-full flex space-x-3">
          <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
        <p className="text-gray-600">Please wait...</p>
      </div>
    </div>
  )
}