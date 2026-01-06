import type { Meta, StoryObj } from '@storybook/angular';
import { ServicesSection } from './services-section';

const meta: Meta<ServicesSection> = {
  title: 'Components/ServicesSection',
  component: ServicesSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The section title',
    },
    services: {
      control: 'object',
      description: 'Array of service card data',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<ServicesSection>;

export const Default: Story = {
  args: {
    title: 'What we do',
    services: [
      {
        title: 'Financial Needs Analysis',
        description: 'We can help you with meeting your financial goals, manage risk and plan for future needs such as life insurance coverage, retirement, or debt repayment.',
        imageSrc: 'https://via.placeholder.com/400x300?text=Financial+Analysis',
        imageAlt: 'Financial analysis illustration',
      },
      {
        title: 'Estate Planning',
        description: 'We can help you understand strategies to preserve wealth and ensure financial security for beneficiaries.',
        imageSrc: 'https://via.placeholder.com/400x300?text=Estate+Planning',
        imageAlt: 'Estate planning illustration',
      },
      {
        title: 'Insurance Needs',
        description: 'Protecting your family in the event finances will be needed most, and building up wealth for future generations.',
        imageSrc: 'https://via.placeholder.com/400x300?text=Insurance',
        imageAlt: 'Insurance illustration',
      },
    ],
  },
};

export const TwoServices: Story = {
  args: {
    title: 'What we do',
    services: [
      {
        title: 'Financial Needs Analysis',
        description: 'We can help you with meeting your financial goals, manage risk and plan for future needs.',
        imageSrc: 'https://via.placeholder.com/400x300?text=Financial+Analysis',
        imageAlt: 'Financial analysis illustration',
      },
      {
        title: 'Estate Planning',
        description: 'We can help you understand strategies to preserve wealth and ensure financial security.',
        imageSrc: 'https://via.placeholder.com/400x300?text=Estate+Planning',
        imageAlt: 'Estate planning illustration',
      },
    ],
  },
};

export const FourServices: Story = {
  args: {
    title: 'Our Complete Services',
    services: [
      {
        title: 'Financial Needs Analysis',
        description: 'Comprehensive financial planning and goal setting.',
        imageSrc: 'https://via.placeholder.com/400x300?text=Financial',
        imageAlt: 'Financial analysis',
      },
      {
        title: 'Estate Planning',
        description: 'Wealth preservation and beneficiary security strategies.',
        imageSrc: 'https://via.placeholder.com/400x300?text=Estate',
        imageAlt: 'Estate planning',
      },
      {
        title: 'Insurance Needs',
        description: 'Family protection and wealth building solutions.',
        imageSrc: 'https://via.placeholder.com/400x300?text=Insurance',
        imageAlt: 'Insurance',
      },
      {
        title: 'Retirement Planning',
        description: 'Secure your future with comprehensive retirement strategies.',
        imageSrc: 'https://via.placeholder.com/400x300?text=Retirement',
        imageAlt: 'Retirement planning',
      },
    ],
  },
};

export const NoServices: Story = {
  args: {
    title: 'What we do',
    services: [],
  },
};
