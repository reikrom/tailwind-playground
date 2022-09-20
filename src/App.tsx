import React from 'react'
import './App.css'
import {Cards} from './components/sections/cards'

function App() {
  return (
    <div className="flex flex-col gap-3 my-32 text-center">
      <h1 className="text-5xl font-bold underline">Tailwind playground</h1>
      <Cards />
    </div>
  )
}

export default App
