import { useEffect, useState } from "react";
import { useParams } from "react-router";


export interface LogProps {
  title: string;
  slug: string;
  overview: string;
  content: string;
  view_count: number;
  published_at: string;
  tags: {
    slug: string;
  }[];
  url: string;
}


const TAG_COLOR = [
  'bg-teal-500/20 text-teal-400',
  'bg-blue-500/20 text-blue-400',
  'bg-green-500/20 text-green-400',
  'bg-yellow-500/20 text-yellow-400',
  'bg-orange-500/20 text-orange-400',
  'bg-red-500/20 text-red-400',
  'bg-pink-500/20 text-pink-400',
] as const;


export const LogView = ({ ...log }: LogProps) => {

  let tagColorIndex = 0;
  const getTagColor = (index: number) => {
    return TAG_COLOR[index % TAG_COLOR.length];
  } 
  
  return (
      <article className="max-w-4xl mx-auto px-6 pb-12">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
              <span>{log?.published_at}</span>
            </div>

            {/* Show tags */}
            {log?.tags && log?.tags.length > 0 ? (
              log.tags.map(tag => {
                const colorClass = getTagColor(tagColorIndex);
                tagColorIndex++;
                return (
                  <div key={tag.slug} className={`text-xs px-3 py-1 rounded ${colorClass} font-medium`}>
                    <span className="tag ms-1">
                      #{tag.slug}
                    </span>
                  </div>  
                );
              })
            ) : (
              <div>
                <span>#none</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{log?.title}</h1>
          
          <div className="flex items-center gap-6 pb-6 border-b border-gray-800">
             <button className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                <path fillRule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{log?.view_count} {log?.view_count === 1 ? 'View' : 'Views'}</span>
            </button>
            {/* <button className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">0 Like</span>
            </button> */}
          </div>
        </div>

        <div className="prose max-w-none ">
          <h2>Overview</h2>
          <p className="pb-6 border-b border-gray-800">
            {log?.overview}
          </p>
          
          {/* This is for showing rich text and also add tyling */}
          <div dangerouslySetInnerHTML={{ __html: log?.content as string }} />
     
        </div>
      </article>
  )
}