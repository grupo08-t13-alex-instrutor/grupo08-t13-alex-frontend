import { Options } from "../components/ModalOptions"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/Options',
    component: Options
}as Meta
type Story = StoryObj<typeof Options>

export const Default: Story = {
    render: ()=>(<Options/>)
}