import Cards from "../components/Cards"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/Cards',
    component: Cards
}as Meta
type Story = StoryObj<typeof Cards>

export const Default: Story = {
}