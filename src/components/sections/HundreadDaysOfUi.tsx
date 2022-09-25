import React from 'react'
import {LoginPage} from '../100ui/LoginPage'
import {Grid} from '../Grid'

interface HundreadDaysOfUiProps {
  className?: string
}

const HundreadDaysOfUi = ({className}: HundreadDaysOfUiProps) => {
  return (
    <div className="relative mt-10 h-full w-full border-b border-slate-500 pb-4">
      <h2 className="text-4xl">100 Days of Ui</h2>

      <LoginPage />
    </div>
  )
}

export {HundreadDaysOfUi}
