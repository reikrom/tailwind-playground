import React from 'react'
import {Card1} from '../card1'
import {Card2} from '../card2'
import {CookieCard} from '../CookieCard'
import {Grid, GridLines} from '../Grid'
import {WrittenBy} from '../WrittenBy'

const Cards = () => {
  return (
    <section className="flex flex-col bg-slate-100">
      <h2 className="mt-32 text-6xl mb-14">Cards</h2>
      {/* <div className="flex flex-wrap items-start gap-8 p-12 border border-stone-900"> */}
      <GridLines />
      <Grid rowGap>
        <div className="col-span-4">
          <Card1 />
        </div>
        {/* product pricing card */}
        <div className="col-span-4">
          <Card2 />
        </div>
        <div className="col-span-3" />
        <div className="col-span-3">
          <CookieCard />
        </div>
        <div className="col-span-8">
          <WrittenBy />
        </div>

        <div className="mt-12 col-span-full lg:col-span-6 lg:mt-0">
          <div className="relative w-full h-full pt-12">
            <div className="relative block w-full h-full px-8 pb-10 bg-gray-100 rounded-lg pt-36 dark:bg-gray-800 md:px-16 md:pb-20">
              <h3 className="text-3xl leading-tight text-black dark:text-white md:text-4xl">
                Testing JavaScript
              </h3>
              <div className="max-w-sm mt-4">
                <p className="text-3xl leading-tight text-gray-400 dark:text-slate-500 md:text-4xl">
                  Learn smart, efficient testing methods.
                </p>
              </div>
              <div className="mt-16">
                <a
                  className="relative inline-flex text-lg font-medium transition opacity-100 group focus:outline-none disabled:opacity-50"
                  href="https://testingjavascript.com"
                >
                  <div className="absolute inset-0 transition transform rounded-full opacity-100 focus-ring bg-inverse disabled:opacity-50" />
                  <div className="relative flex items-center justify-center w-full h-full py-6 space-x-5 text-inverse whitespace-nowrap px-11">
                    <span>Visit course</span>
                    <span>
                      <svg
                        className="transform -rotate-135"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="absolute top-0 left-16">
              <img
                className="object-contain w-auto h-32"
                alt="Illustration of a trophy"
                src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_256,q_auto,f_auto/kentcdodds.com/pages/courses/testing-trophy"
                sizes="8rem"
                title=""
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </Grid>
    </section>
  )
}

export {Cards}
