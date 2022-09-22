import React from 'react'
import {TriangleRight} from '../icons/TriangleRight'

interface ToggleCardProps {
  className?: string
}

const ToggleCard = ({className}: ToggleCardProps) => {
  return (
    <div className="relative w-full bg-red-300 py-12 px-6 text-left">
      <div className="mb-2 text-base font-bold uppercase text-red-500">
        project budgeting
      </div>
      <div className="text-xl font-bold">
        No more anxiety over late deadlines and unprofitable projects. Plan and
        set budgets with confidence!
      </div>
      <a href="#">
        <div className="mt-12 text-lg">
          Learn more
          <span className="font-bold">
            {<TriangleRight className="ml-1 inline h-4 w-4" />}
          </span>
        </div>
      </a>
    </div>
  )
}

export {ToggleCard}
