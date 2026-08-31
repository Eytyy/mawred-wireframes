import type { Metadata } from "next";
import { PageHeaderBand } from "@/components/chrome/PageHeaderBand";
import { SiteFooter } from "@/components/chrome/SiteFooter";
import { SiteHeader } from "@/components/chrome/SiteHeader";
import { UtilityBar } from "@/components/chrome/UtilityBar";
import { StatePanel } from "@/components/StatePanel";
import { WireframeStateProvider } from "@/lib/wireframe-state";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mawred — Lo-fi Wireframes",
  description: "Lo-fi wireframes for the Mawred website redesign",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <WireframeStateProvider>
          <UtilityBar />
          <SiteHeader />
          <PageHeaderBand />
          <main className="mx-auto max-w-[1040px] px-4">{children}</main>
          <SiteFooter />
          <StatePanel />
        </WireframeStateProvider>
      </body>
    </html>
  );
}
