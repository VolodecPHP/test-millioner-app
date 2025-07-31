import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Who Wants to Be a Millionaire?',
  description:
    'Test your knowledge at free online game based on the famous TV quiz show , give the correct answers, and win some amazing prizes!',
  openGraph: {
    title: 'I love Headway',
    description: 'Nothing else to add',
    images: [
      {
        url: '/easter-egg.png',
        width: 1200,
        height: 630,
        alt: 'Check image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
