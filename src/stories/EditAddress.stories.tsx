import { EditAddress } from "../components/EditAddress"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/EditAddress',
    component: EditAddress
}as Meta
type Story = StoryObj<typeof EditAddress>

export const Default: Story = {
}