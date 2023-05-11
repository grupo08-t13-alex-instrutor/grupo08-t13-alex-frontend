import ForgotPasswordForm from "../components/ForgotPassword"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/ForgotPasswordForm',
    component: ForgotPasswordForm
}as Meta
type Story = StoryObj<typeof ForgotPasswordForm>

export const Default: Story = {
    render: ()=>(<ForgotPasswordForm/>)
}