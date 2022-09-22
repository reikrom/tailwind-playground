import React from 'react'
import {TravelCard} from '../cards/TravelCard'
import {ProductCard} from '../cards/ProductCard'
import {CookieCard} from '../cards/CookieCard'
import {Grid, GridLines} from '../Grid'
import {WrittenBy} from '../cards/WrittenBy'
import {TestingJavascript} from '../cards/TestingJavascript'
import {ToggleCard} from '../cards/ToggleCard'

const Cards = () => {
  return (
    <section className="flex flex-col bg-slate-100">
      <h2 className="mt-32 mb-14 text-6xl">Cards</h2>
      {/* <GridLines /> */}
      <Grid rowGap>
        <div className="col-span-full">
          <div className="max-w-sm">
            <TravelCard />
          </div>
        </div>
        {/* product pricing card */}
        <div className="col-span-full max-w-sm ">
          <ProductCard />
        </div>

        <div className="col-span-full max-w-sm">
          <CookieCard />
        </div>
        <div className="col-span-full">
          <WrittenBy />
        </div>

        <div className="col-span-full lg:col-span-6">
          <TestingJavascript />
        </div>
        <div className="col-span-4 ">
          <ToggleCard className="" />
        </div>

        <div className="col-span-full row-span-6">
          <div className="w-f h-f relative h-full bg-green-300 ">
            <div className="h-f bg-green-[#30C85E] absolute left-0 bottom-0 top-0 w-2"></div>
            /
          </div>
        </div>
      </Grid>
    </section>
  )
}

export {Cards}
