import type { Meta, StoryObj } from '@storybook/angular';
import { ContactSection } from './contact-section';

const meta: Meta<ContactSection> = {
  title: 'Components/ContactSection',
  component: ContactSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<ContactSection>;

export const Default: Story = {
  args: {
    title: 'Get in touch',
    contactInfo: {
      location: 'Mississauga, ON',
      email: 'mitchellbrownfinance@gmail.com',
      quote: 'Your need of finance is much greater than your need of protection',
      quoteAuthor: 'R. Nelson Nash'
    },
    imageSrc: 'https://via.placeholder.com/600x400?text=Office+Building',
    imageAlt: 'Mitchell Brown Financial office building',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Get in touch',
    contactInfo: {
      location: 'Mississauga, ON',
      email: 'mitchellbrownfinance@gmail.com',
      quote: 'Your need of finance is much greater than your need of protection',
      quoteAuthor: 'R. Nelson Nash'
    },
    imageSrc: '',
  },
};

export const WithoutQuote: Story = {
  args: {
    title: 'Get in touch',
    contactInfo: {
      location: 'Mississauga, ON',
      email: 'mitchellbrownfinance@gmail.com',
    },
    imageSrc: 'https://via.placeholder.com/600x400?text=Office+Building',
    imageAlt: 'Mitchell Brown Financial office building',
  },
};
