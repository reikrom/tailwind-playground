import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

// import { Button } from './Button';
import {CookieCard} from '../components/cards/CookieCard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards/CookieCard',
  component: CookieCard,
} as ComponentMeta<typeof CookieCard>

const Template: ComponentStory<typeof CookieCard> = () => <CookieCard />

export const Primary = Template.bind({})

// Primary.args = {
//   primary: true,
//   label: 'Button',
// }
