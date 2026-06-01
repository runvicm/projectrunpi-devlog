import { useEffect, useState } from "react"

export const DevStatus = () => {

  const [status, setStatus] = useState('Loading....')

  useEffect(() => {
    fetch("/api/status")
      .then(res => {
        if (!res.ok) return null;
        return res.json();
      })
    .then((data: unknown) => {
      if (data) setStatus(data as string);
    })
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 mb-12">
      <div className="flex items-center gap-3 mb-4">
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <h3 className="text-2xl font-bold">Today's Status</h3>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <p className="text-gray-300">{status}</p>
      </div>
    </section>
  )
}