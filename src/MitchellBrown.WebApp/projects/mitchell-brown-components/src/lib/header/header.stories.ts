import type { Meta, StoryObj } from '@storybook/angular';
import { Header } from './header';

const meta: Meta<Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed when no logo is provided',
    },
    logoSrc: {
      control: 'text',
      description: 'The source URL for the logo image',
    },
    logoAlt: {
      control: 'text',
      description: 'Alt text for the logo image',
    },
    navItems: {
      control: 'object',
      description: 'Array of navigation items',
    },
    navItemClick: {
      action: 'navItemClick',
      description: 'Emitted when a navigation item is clicked',
    },
    logoClick: {
      action: 'logoClick',
      description: 'Emitted when the logo is clicked',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<Header>;

export const Default: Story = {
  args: {
    title: 'Mitchell Brown',
    navItems: [
      { label: 'Life Insurance', href: '/services/life-insurance' },
      { label: 'Investments', href: '/services/investments' },
      { label: 'Retirement Planning', href: '/services/retirement-planning', active: true },
      { label: 'Estate Planning', href: '/services/estate-planning' },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    logoSrc: 'https://via.placeholder.com/150x40?text=Mitchell+Brown',
    logoAlt: 'Mitchell Brown Logo',
    navItems: [
      { label: 'Life Insurance', href: '/services/life-insurance' },
      { label: 'Investments', href: '/services/investments' },
      { label: 'Retirement Planning', href: '/services/retirement-planning' },
      { label: 'Estate Planning', href: '/services/estate-planning', active: true },
    ],
  },
};

export const MinimalNav: Story = {
  args: {
    title: 'Mitchell Brown',
    navItems: [
      { label: 'Life Insurance', href: '/services/life-insurance' },
      { label: 'Retirement Planning', href: '/services/retirement-planning' },
    ],
  },
};

export const NoNavItems: Story = {
  args: {
    title: 'Mitchell Brown',
    navItems: [],
  },
};

export const MobileView: Story = {
  args: {
    title: 'Mitchell Brown',
    navItems: [
      { label: 'Life Insurance', href: '/services/life-insurance', active: true },
      { label: 'Investments', href: '/services/investments' },
      { label: 'Retirement Planning', href: '/services/retirement-planning' },
      { label: 'Estate Planning', href: '/services/estate-planning' },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
