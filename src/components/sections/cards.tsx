import React from 'react'
import {Card1} from '../cards/card1'
import {Card2} from '../cards/card2'
import {CookieCard} from '../cards/CookieCard'
import {Grid, GridLines} from '../Grid'
import {WrittenBy} from '../cards/WrittenBy'
import {TestingJavascript} from '../cards/TestingJavascript'

const Cards = () => {
  return (
    <section className="flex flex-col bg-slate-100">
      <h2 className="mt-32 mb-14 text-6xl">Cards</h2>
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
        <div className="col-span-4">
          <CookieCard />
        </div>
        <div className="col-span-8">
          <WrittenBy />
        </div>

        <TestingJavascript className="col-span-full mt-12 lg:col-span-6" />
      </Grid>
    </section>
  )
}

export {Cards}
