import { Calendar, ChevronRight, Eye, Hash } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Filter } from "../blocks/Filter";
import { LogListSkeleton } from "./LogListSkeleton";

interface LogProps {
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

export const LogList = () => {

  const [logs, setLogs] = useState<LogProps[] | null>(null);

  useEffect(() => {
    fetch("/api/devloglist")
      .then(res => {
        if (!res.ok) return null;
        return res.json();
      })
    .then((data: unknown) => {
      if (data) setLogs(data as LogProps[]);
    })
  }, []);



  const handleClick = (slug: string , e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
      const href = e.currentTarget.href; // save it here

      fetch(`/api/add/view/${slug}`, {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ slug }),
      }).finally(() => {
        window.location.href = href;
      });
  };

  let tagColorIndex = 0;
  const getTagColor = (index: number) => {
    return TAG_COLOR[index % TAG_COLOR.length];
  } 

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
            Latest Logs
          </h3>
          <Filter />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {logs && logs.length > 0 ? (
            logs.map(log => (
            <div key={log.slug} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition group flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                  <span>{log.published_at}</span>
                </div>
                
                <div className="flex gap-2">
                  {log.tags && log.tags.length > 0 ? (
                    log.tags.map(tag => {
                      const colorClass = getTagColor(tagColorIndex);
                      tagColorIndex++;
                      return (
                        <div key={tag.slug} className={`text-xs px-2 py-1 rounded ${colorClass} font-medium`}>
                          <span  className="tag">
                            #{tag.slug}
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <div>
                      <span className="text-xs text-gray-400 font-medium px-2 p-1 rounded bg-gray-500/20 flex items-center"><Hash size={12} />none</span>
                    </div>
                  )}
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">{ log.title}</h4>
              <p className="text-gray-400 text-sm mb-4 grow">{ log.overview }</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div className="flex items-center gap-4 text-sm">
                  <button className="flex items-center gap-1 text-gray-400 hover:text-pink-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                    <path fillRule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
                  </svg>
                    <span>{ log.view_count}</span>
                  </button>
                  {/* <button className="flex items-center gap-1 text-gray-400 hover:text-yellow-400 transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span>8</span>
                  </button> */}
                </div>
                <Link
                  to={`/view/${log.slug}`}
                  onClick={(e) => handleClick(log.slug, e)}
                  className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition font-medium">
                  Read more
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))
          ) : (
            <LogListSkeleton />
          )}

        </div>
      </section>
    </>
  )
}


