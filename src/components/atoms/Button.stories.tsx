import { Meta, Story } from '@storybook/react'

import { Button, Props } from './Button'

export default {
  title: 'Practice/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'CLICK ME Primary',
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})
export const Secondary = Template.bind({})

Secondary.args = {
  variant: 'secondary',
  children: 'CLICK ME Secondary',
}
