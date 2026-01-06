import type { Meta, StoryObj } from '@storybook/angular';
import { InquiryForm } from './inquiry-form';

const meta: Meta<InquiryForm> = {
  title: 'Components/InquiryForm',
  component: InquiryForm,
  tags: ['autodocs'],
  argTypes: {
    formSubmit: {
      action: 'formSubmit',
      description: 'Emitted when the form is submitted with valid data',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<InquiryForm>;

export const Default: Story = {
  args: {},
};

export const WithPrefilledData: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mb-inquiry-form (formSubmit)="formSubmit($event)"></mb-inquiry-form>
    `,
  }),
};
