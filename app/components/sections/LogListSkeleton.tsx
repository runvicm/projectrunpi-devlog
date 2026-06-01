import { Calendar, ChevronRight, Eye } from "lucide-react"

export const LogListSkeleton = () => (
  <>
    {[...Array(9)].map((_, i) => (
  
      <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition group flex flex-col animate-pulse">
        <div className="flex items-start justify-between mb-2">
          <div className="flex gap-2 text-[16px] text-gray-400">
            <Calendar size={16} />
            <span className="h-4 bg-gray-700 rounded w-20 mb-2"></span>
          </div>
          <span className="h-4 bg-gray-700 rounded w-10 mb-2"> </span>
        </div>
      
        <h4 className="h-6 bg-gray-700 rounded w-full mb-3"></h4>
        <p className="h-4 bg-gray-700 rounded w-full mb-3"></p>
        <p className="h-4 bg-gray-700 rounded w-full mb-3"></p>
        <p className="h-4 bg-gray-700 rounded w-full mb-3"></p>
          <p className="h-4 bg-gray-700 rounded w-full mb-4"></p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center gap-4 text-sm">
            <button className="flex gap-1 text-gray-400 hover:text-pink-400 transition">
              <Eye size={16} />
              <span className="h-4 bg-gray-700 rounded w-12 mb-3"></span>
            </button>
            {/* <button className="flex items-center gap-1 text-gray-400 hover:text-yellow-400 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>8</span>
            </button> */}
          </div>
          <div
            className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition font-medium">
            Read more
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    ))}
  </>
)


