import React from 'react'

const Card2 = () => {
  return (
    <div className="relative flex-grow rounded bg-slate-800 px-8 py-8 text-slate-400">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-full bg-red-500 px-4 uppercase text-white">
        Most popular
      </div>
      <div className="my-4">
        <span className="mr-2 text-5xl text-white">$5</span>
        <span className="">/mo</span>
      </div>
      <div className="mb-8 text-xs">Billed Anually (save 20%)</div>
      <ul className="mb-8 flex flex-col gap-2 text-left">
        <li className="flex items-center gap-4">
          <div className="icon h-5 w-5 rounded-full bg-green-500"></div>{' '}
          <span>Included feature #1</span>
        </li>
        <li className="flex items-center gap-4">
          <div className="icon h-5 w-5 rounded-full bg-green-500"></div>{' '}
          <span>Included feature #2</span>
        </li>
        <li className="flex items-center gap-4">
          <div className="icon h-5 w-5 rounded-full bg-green-500"></div>{' '}
          <span>Included feature #3</span>
        </li>
      </ul>
      <div className="mb-4 text-left text-xs uppercase">Coming soon</div>
      <div className="text-sm">Custom placeholder text</div>
      <button className="my-4 w-full rounded-sm bg-emerald-600 py-2 text-white">
        Signup Now
      </button>
      <div className="text-xs">You'll be charged $48 + Tax</div>
      <div className="text-xs">14 days moneyback guarantee</div>
    </div>
  )
}

export {Card2}
