import React from 'react'
import './App.css'
import {Buttons} from './components/sections/Buttons'
import {Cards} from './components/sections/cards'
import {HundreadDaysOfUi} from './components/sections/HundreadDaysOfUi'

function App() {
  return (
    <div className="my-32 flex flex-col gap-3 text-center">
      <h1 className="text-5xl font-bold underline">Tailwind playground</h1>
      <Cards />
      <Buttons />
      <HundreadDaysOfUi />
    </div>
  )
}

export default App
