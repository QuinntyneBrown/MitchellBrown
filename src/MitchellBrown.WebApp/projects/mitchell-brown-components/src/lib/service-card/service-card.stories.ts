import type { Meta, StoryObj } from '@storybook/angular';
import { ServiceCard } from './service-card';

const meta: Meta<ServiceCard> = {
  title: 'Components/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the service card',
    },
    description: {
      control: 'text',
      description: 'The description of the service',
    },
    imageSrc: {
      control: 'text',
      description: 'The source URL for the service image',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the service image',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<ServiceCard>;

export const Default: Story = {
  args: {
    title: 'Financial Needs Analysis',
    description: 'We can help you with meeting your financial goals, manage risk and plan for future needs such as life insurance coverage, retirement, or debt repayment.',
    imageSrc: 'https://via.placeholder.com/400x300?text=Financial+Analysis',
    imageAlt: 'Financial analysis illustration',
  },
};

export const EstatePlanning: Story = {
  args: {
    title: 'Estate Planning',
    description: 'We can help you understand strategies to preserve wealth and ensure financial security for beneficiaries.',
    imageSrc: 'https://via.placeholder.com/400x300?text=Estate+Planning',
    imageAlt: 'Estate planning illustration',
  },
};

export const InsuranceNeeds: Story = {
  args: {
    title: 'Insurance Needs',
    description: 'Protecting your family in the event finances will be needed most, and building up wealth for future generations.',
    imageSrc: 'https://via.placeholder.com/400x300?text=Insurance',
    imageAlt: 'Insurance illustration',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Service Without Image',
    description: 'This card demonstrates how the component looks without an image.',
    imageSrc: '',
    imageAlt: '',
  },
};

export const LongDescription: Story = {
  args: {
    title: 'Service with Long Description',
    description: 'This is a very long description that demonstrates how the card handles more text. We can help you with meeting your financial goals, manage risk and plan for future needs such as life insurance coverage, retirement, or debt repayment. We provide comprehensive financial planning services.',
    imageSrc: 'https://via.placeholder.com/400x300?text=Service',
    imageAlt: 'Service illustration',
  },
};
