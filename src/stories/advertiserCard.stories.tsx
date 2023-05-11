import { AdvertiserCard } from "../components/advertiserCard"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/AdvertiserCard',
    component: AdvertiserCard
}as Meta
type Story = StoryObj<typeof AdvertiserCard>

export const Default: Story = {
    render: ()=>(<AdvertiserCard/>)
}