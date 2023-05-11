import MainPhotoAdComponent from "../components/AdMainPhoto"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/AdMainPhoto',
    component: MainPhotoAdComponent
}as Meta
type Story = StoryObj<typeof MainPhotoAdComponent>

export const Default: Story = {
    render: ()=>(<MainPhotoAdComponent/>)
}