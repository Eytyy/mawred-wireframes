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
          <div className="flex items-start">
            <div className="sticky top-0 flex h-screen w-64 shrink-0 flex-col justify-between p-4 lg:p-10">
              <SiteHeader />
              <SiteFooter />
            </div>
            <main className="min-w-0 flex-1 p-4 lg:p-10 max-w-360 mx-auto">{children}</main>
          </div>
          <StatePanel />
        </WireframeStateProvider>
      </body>
    </html>
  );
}
