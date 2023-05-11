import { ImageVehicleModal } from "../components/ImageVehicleModal"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/ImageVehicleModal',
    component: ImageVehicleModal
}as Meta
type Story = StoryObj<typeof ImageVehicleModal>

export const Default: Story = {
    render: ()=>(<ImageVehicleModal/>)
}