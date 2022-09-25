import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {LoginPage} from './LoginPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '100 Days of Ui/01 Login page',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />

export const basic = Template.bind({})

// Basic.args = {
//   primary: true,
//   label: 'Button',
// }
