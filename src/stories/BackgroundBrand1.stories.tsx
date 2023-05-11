import BackgroundBrandDiv from "../components/BackgroundBrand1"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/BackgroundBrandDiv',
    component: BackgroundBrandDiv
}as Meta
type Story = StoryObj<typeof BackgroundBrandDiv>

export const Default: Story = {
    render: ()=>(<BackgroundBrandDiv/>)
}