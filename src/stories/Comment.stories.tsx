import  Comment  from "../components/Comment"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/Comment',
    component: Comment
}as Meta
type Story = StoryObj<typeof Comment>

export const Default: Story = {
    render: ()=>(<Comment/>)
}