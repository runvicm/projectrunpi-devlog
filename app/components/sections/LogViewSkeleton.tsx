import { Calendar, Eye } from "lucide-react"

export const LogViewSkeleton = () => (
     <article className="max-w-4xl mx-auto px-6 pb-12 animate-pulse">
        <div className="">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex gap-2 text-sm text-gray-400">
              <Calendar size={16} />
              <span className="h-4 bg-gray-700 w-25 mb-3"></span>
            </div>
            <span className="h-4 bg-gray-700 rounded w-15 mb-3"> </span>
          </div>

          {/* Title */}
          <h1 className="h-9 bg-gray-700 text-4xl md:text-5xl font-bold mb-6 "></h1>
          
          <div className="flex gap-6 pb-6 border-b border-gray-800">
             <button className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition">
              <Eye size={24} />
              <span className="h-4 bg-gray-700 w-25"></span>
            </button>
            {/* <button className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">0 Like</span>
            </button> */}
          </div>

        </div>

        <div className="prose max-w-none flex flex-col gap-3">
          <h2>Overview</h2>
          <div className="h-4 bg-gray-700 w-full "></div>
          <div className="h-4 bg-gray-700 w-full "></div>
          <div className="h-4 bg-gray-700 w-full "></div>
          <div className="pb-6 border-b border-gray-800 w-full "></div>
          
          {/* This is for showing rich text and also add tyling */}
          <div className="flex flex-col gap-3">
            <div className="h-4 bg-gray-700 w-full "></div>
            <div className="h-4 bg-gray-700 w-full "></div>
            <div className="h-4 bg-gray-700 w-full "></div>
            <div className="h-4 bg-gray-700 w-full "></div>
            <div className="h-4 bg-gray-700 w-full "></div>
            <div className="h-4 bg-gray-700 w-full "></div>
            <div className="h-4 bg-gray-700 w-full "></div>
            <div className="h-4 bg-gray-700 w-full "></div>
            <div className="h-4 bg-gray-700 w-full "></div>
          </div>
          </div>
      </article>
)