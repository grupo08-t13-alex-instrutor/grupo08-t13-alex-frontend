import Header from "../components/Header"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/Header',
    component: Header
}as Meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
}