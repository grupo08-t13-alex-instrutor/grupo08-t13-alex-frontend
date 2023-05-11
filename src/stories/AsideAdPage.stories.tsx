import AsideAdPage from "../components/AsideAdPage"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/AsidePage',
    component: AsideAdPage
}as Meta
type Story = StoryObj<typeof AsideAdPage>

export const Default: Story = {
    render: ()=>(<AsideAdPage/>)
}