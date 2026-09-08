import type { Metadata } from 'next';
import { SiteFooter } from '@/components/chrome/SiteFooter';
import { SiteHeader } from '@/components/chrome/SiteHeader';
import { StatePanel } from '@/components/StatePanel';
import { WireframeStateProvider } from '@/lib/wireframe-state';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mawred — Lo-fi Wireframes',
  description: 'Lo-fi wireframes for the Mawred website redesign',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body className="codes-off">
        <WireframeStateProvider>
          <div className="lg:flex lg:items-start">
            <div className="border-b border-black p-4 pr-14 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:shrink-0 lg:border-0 lg:p-10 lg:pt-15">
              <SiteHeader />
            </div>
            <div className="flex min-h-screen min-w-0 flex-1 flex-col lg:border-l lg:border-black">
              <main className="flex-1 py-4 lg:py-10">{children}</main>
              <SiteFooter />
            </div>
          </div>
          <StatePanel />
        </WireframeStateProvider>
      </body>
    </html>
  );
}
