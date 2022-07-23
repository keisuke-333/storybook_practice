import { Meta } from '@storybook/react'
import { Button } from './Button'

const meta: Meta = {
  title: 'Practice/Button',
  component: Button,
}
export default meta

export const Default = () => <Button variant="primary">CLICK ME Default</Button>
export const Secondary = () => (
  <Button variant="secondary">CLICK ME Second</Button>
)
