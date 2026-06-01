import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { LogView, type LogProps } from "~/components/sections/LogView";
import { LogViewSkeleton } from "~/components/sections/LogViewSkeleton";

const ViewLog = () => {

  const [log, setLog] = useState<LogProps | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    fetch(`/api/view/${slug}`)
      .then(res => {
        if (!res.ok) return null;
        return res.json();
      })
    .then((data: unknown) => {
      if (data) setLog(data as LogProps);
    })
  }, []);

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-8">
        <Link to="/" className="flex items-center gap-2 text-blue-400 hover:text-white transition w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M2.515 10.674a1.875 1.875 0 0 0 0 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374ZM12.53 9.22a.75.75 0 1 0-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L15.31 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" clipRule="evenodd" />
          </svg>
          <span>Back to Logs</span>
        </Link>
      </section>
      {log ? <LogView {...log} /> : <LogViewSkeleton />}
    </>
  )
}

export default ViewLog;