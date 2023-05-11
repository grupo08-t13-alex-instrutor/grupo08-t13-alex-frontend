import { FooterHomePage } from "../components"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/FooterHomePage',
    component: FooterHomePage
}as Meta
type Story = StoryObj<typeof FooterHomePage>

export const Default: Story = {
    render: ()=>(<FooterHomePage/>)
}