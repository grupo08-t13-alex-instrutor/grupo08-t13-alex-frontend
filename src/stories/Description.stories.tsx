import { Description } from "../components/Description"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/Description',
    component: Description
}as Meta
type Story = StoryObj<typeof Description>

export const Default: Story = {
    render: ()=>(<Description/>)
}