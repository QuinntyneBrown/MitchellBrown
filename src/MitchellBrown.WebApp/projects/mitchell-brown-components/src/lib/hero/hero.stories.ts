import type { Meta, StoryObj } from '@storybook/angular';
import { Hero } from './hero';

const meta: Meta<Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    headline: {
      control: 'text',
      description: 'The main headline text',
    },
    headlineEmphasis: {
      control: 'text',
      description: 'The word to emphasize in the headline',
    },
    ctaText: {
      control: 'text',
      description: 'Text displayed on the call-to-action button',
    },
    ctaAriaLabel: {
      control: 'text',
      description: 'Accessible label for the CTA button',
    },
    ctaClick: {
      action: 'ctaClick',
      description: 'Emitted when the CTA button is clicked',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<Hero>;

export const Default: Story = {
  args: {
    headline: 'Let your finances grow.',
    headlineEmphasis: 'your',
    ctaText: 'Request a Free Info Session',
    ctaAriaLabel: 'Request a free information session',
  },
};

export const CustomHeadline: Story = {
  args: {
    headline: 'Build your future today.',
    headlineEmphasis: 'your',
    ctaText: 'Get Started',
    ctaAriaLabel: 'Get started with financial planning',
  },
};

export const DifferentEmphasis: Story = {
  args: {
    headline: 'Let your finances grow.',
    headlineEmphasis: 'finances',
    ctaText: 'Request a Free Info Session',
    ctaAriaLabel: 'Request a free information session',
  },
};

export const ShortCTA: Story = {
  args: {
    headline: 'Let your finances grow.',
    headlineEmphasis: 'your',
    ctaText: 'Learn More',
    ctaAriaLabel: 'Learn more about our services',
  },
};

export const LongCTA: Story = {
  args: {
    headline: 'Let your finances grow.',
    headlineEmphasis: 'your',
    ctaText: 'Schedule Your Free Consultation Today',
    ctaAriaLabel: 'Schedule your free consultation today',
  },
};
