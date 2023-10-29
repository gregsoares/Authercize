import type { Meta, StoryObj } from '@storybook/react'
import TextInput from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'Example/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    onChange: { action: 'onChange' },
    size: {
      control: 'text',
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password'],
      },
    },
  },
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    text: 'Hello World',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    text: 'Hello World',
  },
}

export const Email: Story = {
  args: {
    size: '.8em',
    type: 'email',
    text: 'Hello World',
  },
}

export const Form: Story = {
  args: {
    size: '.8em',
    type: 'text',
    text: 'Name',
  },
}
