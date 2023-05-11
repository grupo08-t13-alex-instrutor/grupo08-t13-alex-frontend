import { Banner } from "../components"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/Banner',
    component: Banner
}as Meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
    render: ()=>(<Banner/>)
}