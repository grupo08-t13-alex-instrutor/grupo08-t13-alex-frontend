import { CreationCommentPageProduct } from "../components"
import componentStory from "@storybook/react"
import type { Meta, StoryObj } from "@storybook/react"
export default{
    title: 'Components/CreationCommentPageProduct',
    component: CreationCommentPageProduct
}as Meta
type Story = StoryObj<typeof CreationCommentPageProduct>

export const Default: Story = {
    render: ()=>(<CreationCommentPageProduct/>)
}