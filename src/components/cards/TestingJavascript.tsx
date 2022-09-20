import React from 'react'
import clsx from 'clsx'

interface TestingJavascriptProps {
  className?: string
}

const TestingJavascript = ({className}: TestingJavascriptProps) => {
  return (
    <div className={clsx('', className)}>
      <div className="relative h-full w-full pt-12">
        <div className="relative block h-full w-full rounded-lg bg-gray-100 px-8 pb-10 pt-36 dark:bg-gray-800 md:px-16 md:pb-20">
          <h3 className="text-3xl leading-tight text-black dark:text-white md:text-4xl">
            Testing JavaScript
          </h3>
          <div className="mt-4 max-w-sm">
            <p className="text-3xl leading-tight text-gray-400 dark:text-slate-500 md:text-4xl">
              Learn smart, efficient testing methods.
            </p>
          </div>
          <div className="mt-16">
            <a
              className="group relative inline-flex text-lg font-medium opacity-100 transition focus:outline-none disabled:opacity-50"
              href="https://testingjavascript.com"
            >
              <div className="focus-ring bg-inverse absolute inset-0 transform rounded-full opacity-100 transition disabled:opacity-50" />
              <div className="text-inverse relative flex h-full w-full items-center justify-center space-x-5 whitespace-nowrap py-6 px-11">
                <span>Visit course</span>
                <span>
                  <svg
                    className="-rotate-135 transform"
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
            className="h-32 w-auto object-contain"
            alt="Illustration of a trophy"
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_256,q_auto,f_auto/kentcdodds.com/pages/courses/testing-trophy"
            sizes="8rem"
            title=""
          />
        </div>
      </div>
    </div>
  )
}

export {TestingJavascript}
