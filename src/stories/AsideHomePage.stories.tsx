import  AsideHomePage  from "../components/AsideHomePage"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/AsideHomePage',
    component: AsideHomePage
}as Meta
type Story = StoryObj<typeof AsideHomePage>

export const Default: Story = {
}