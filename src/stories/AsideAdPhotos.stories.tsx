import AsideAdCards from "../components/AsideAdPhotos"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/AsideAdPhotos',
    component: AsideAdCards
}as Meta
type Story = StoryObj<typeof AsideAdCards>

export const Default: Story = {
}