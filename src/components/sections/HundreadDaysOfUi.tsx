import React from 'react'
import {Grid} from '../Grid'

interface HundreadDaysOfUiProps {
  className?: string
}

const HundreadDaysOfUi = ({className}: HundreadDaysOfUiProps) => {
  return (
    <div className="relative mt-10 h-full w-full border-b border-slate-500 pb-4">
      <h2 className="text-4xl">100 Days of Ui</h2>

      <Grid>
        <div className="relative z-10 col-span-full scale-105 border border-slate-100 bg-white px-4  text-left shadow-xl md:p-24 md:pb-40 lg:col-span-6">
          <div className="relative bottom-10 text-2xl text-slate-400">AE</div>
          <div className="text-left">
            <h2 className="mb-2 text-3xl">
              <span className="text-slate-500">We are </span>aroma
            </h2>
            <p className="mb-14 max-w-[200px] text-sm text-slate-500">
              Welcome back please login to your account
            </p>
          </div>

          <form className="mb-6 text-left shadow-lg" action="">
            <input
              className="transition-duration-500 h-16 w-full border border-slate-200 px-4 outline-none  transition-all ease-in-out focus:border-l-4 focus:border-l-red-500"
              placeholder="Email Address"
              type="text"
            />
            <input
              className="transition-duration-500 h-16 w-full border border-slate-200 px-4 outline-none  transition-all ease-in-out focus:border-l-4 focus:border-l-red-500"
              placeholder="Password"
              type="password"
            />
          </form>

          <div className="mb-6 flex w-full justify-between">
            <div className="text-left">
              <input type="checkbox" className="" />
              <div className="relative bottom-[2px] ml-2 inline-block text-xs">
                Remember me
              </div>
            </div>
            <button className="cursor-pointer  text-xs">
              Forgot password?
            </button>
          </div>

          <div className="flex gap-4">
            <button className="cursor-pointer rounded bg-black px-8 py-2 text-white">
              Log in
            </button>
            <button className="cursor-pointer rounded border border-slate-400 px-8 py-2 text-black">
              Sign up
            </button>
          </div>
        </div>

        <div
          className="relative col-span-full h-full bg-slate-200 bg-cover p-6 lg:col-span-6 lg:-ml-6 lg:p-10"
          style={{
            background:
              'url(https://images.unsplash.com/photo-1604213410393-89f141bb96b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
          }}
        >
          <div className="flex w-full justify-end gap-4 text-sm text-white">
            <div className="cursor-pointer uppercase">About us</div>
            <div className="cursor-pointer uppercase">Showcase</div>
            <div className="cursor-pointer uppercase">letters</div>
            <div className="cursor-pointer uppercase">contact</div>
            <div className="cursor-pointer uppercase">blog</div>
          </div>
          <div className="absolute top-1/2 left-1/2 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white bg-opacity-40 drop-shadow-lg backdrop-blur-lg">
            <div
              style={{textShadow: '10px 10px 2px rgba(0,0,0,0.33'}}
              className="absolute mb-4  text-9xl text-white"
            >
              a
            </div>
          </div>
          <div className="absolute  bottom-5 right-10 flex gap-4">
            <button className="cursor-pointer rounded border border-slate-400 bg-black bg-opacity-20 px-8 py-2 text-white">
              Previous
            </button>
            <button className="cursor-pointer rounded border border-slate-400 bg-white bg-opacity-20 px-8 py-2 text-white">
              next
            </button>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export {HundreadDaysOfUi}
