// SkeletonProduct.jsx

export default function SkeletonProduct() {
  return (
    <div className="animate-pulse flex flex-col space-y-4 p-4 bg-gray-200 rounded-lg w-full h-full">
      <div className="bg-gray-300 h-48 w-full rounded"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  )
}
