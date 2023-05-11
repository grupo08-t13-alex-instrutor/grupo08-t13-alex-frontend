import UpdateUserForm from "../components/UpdateUserForm"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/UpdateUserForm',
    component: UpdateUserForm
}as Meta
type Story = StoryObj<typeof UpdateUserForm>

export const Default: Story = {
}