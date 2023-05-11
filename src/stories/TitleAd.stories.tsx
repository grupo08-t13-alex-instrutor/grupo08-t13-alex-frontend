import { TitleAd } from "../components"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/TitleAd',
    component: TitleAd
}as Meta
type Story = StoryObj<typeof TitleAd>

export const Default: Story = {
    render: ()=>(<TitleAd/>)
}