import React from 'react'

const CookieCard = () => {
  return (
    <div className=" relative border bg-slate-200 p-8">
      <div className="absolute -top-6 left-1/2 h-16 w-16 -translate-x-1/2 border bg-red-200"></div>
      <div className="my-6 text-slate-700">
        We use cookies to provider a better user experience.
      </div>
      <div className="flex w-full justify-evenly gap-4">
        <button className="">Privacy Policy</button>
        <button className="rounded-md bg-green-500 px-6 py-2 font-bold text-white">
          Accept
        </button>
      </div>
    </div>
  )
}

export {CookieCard}
