import React from 'react'

const WrittenBy = () => {
  return (
    <div className="flex w-full flex-grow items-start gap-6 bg-slate-200 p-6">
      <div className="h-14 w-14  rounded-full bg-green-500" />
      <div className="text-left">
        <div className="mb-2 text-xs uppercase text-slate-400">written by</div>
        <div className="mb-2 text-xl font-bold">Ivan ivanovs</div>
        <p className="max-w-xl">
          Sint est aliquip consequat ut in irure incididunt magna pariatur
          officia ad ullamco. Aute dolor sunt ex esse occaecat eu mollit id qui
          veniam voluptate labore aliqua. Do ut nisi exercitation cupidatat ad
          minim
        </p>
      </div>
    </div>
  )
}

export {WrittenBy}
