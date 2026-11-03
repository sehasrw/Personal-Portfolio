import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'), // Replace with your domain before publishing.
  title: { default: 'Sehas W — Creative Designer', template: '%s | Sehas W' },
  description: 'Sehas Walukularachchi — independent graphic designer exploring branding, packaging, editorial design and digital campaigns.',
  openGraph: { title: 'Sehas W — Creative Designer', description: 'Turning ideas into thoughtful visuals.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
