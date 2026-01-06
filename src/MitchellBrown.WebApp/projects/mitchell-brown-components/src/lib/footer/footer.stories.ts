import type { Meta, StoryObj } from '@storybook/angular';
import { Footer } from './footer';

const meta: Meta<Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    companyName: {
      control: 'text',
      description: 'The company name displayed in the footer',
    },
    copyright: {
      control: 'text',
      description: 'Custom copyright text. If empty, generates automatically',
    },
    links: {
      control: 'object',
      description: 'Array of footer navigation links',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<Footer>;

export const Default: Story = {
  args: {
    companyName: 'Mitchell Brown Financial',
    copyright: '',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export const WithMoreLinks: Story = {
  args: {
    companyName: 'Mitchell Brown Financial',
    copyright: '',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
  },
};

export const WithCustomCopyright: Story = {
  args: {
    companyName: 'Mitchell Brown Financial',
    copyright: '© 2024 Mitchell Brown Financial. Licensed and Insured.',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
};

export const MinimalFooter: Story = {
  args: {
    companyName: 'Mitchell Brown Financial',
    copyright: '',
    links: [],
  },
};
