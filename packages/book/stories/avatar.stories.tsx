import type { Story } from "@ladle/react";
import { Avatar } from 'ui'

const src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

export const Small: Story = () => <Avatar size="small" src={src} />;

export const Medium: Story = () => <Avatar size="medium" src={src} />;

export const Large: Story = () => <Avatar size="large" src={src} />;

export const XLarge: Story = () => <Avatar size="xlarge" src={src} />;

export const XXLarge: Story = () => <Avatar size="xxlarge" src={src} />;

export const WithLink: Story = () => <Avatar size="xxlarge" src={src} href="https://google.com" />;
