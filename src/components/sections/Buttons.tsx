import React from 'react'
import {Grid} from '../Grid'

const Buttons = () => {
  return (
    <div className="relative h-full w-full transition duration-500">
      <h2 className="my-10 border-b border-b-slate-500 pb-5 text-4xl">
        Buttons
      </h2>

      <Grid rowGap>
        <div className="col-span-full">
          <button className=" h-full whitespace-nowrap rounded-full bg-red-500 px-10 py-4 font-bold text-white">
            Start tracking for free
          </button>
        </div>

        <div className="col-span-full">
          <button className="rounded-full bg-[#1A8CD9] px-14 py-6 font-bold text-white">
            Action
          </button>
        </div>

        <div className="col-span-full row-span-6 content-center bg-black pt-6  ">
          <button className="rounded-full bg-white py-1 px-4 font-bold transition duration-500 ease-in-out hover:bg-slate-200">
            Follow
          </button>
        </div>
      </Grid>
    </div>
  )
}

export {Buttons}
