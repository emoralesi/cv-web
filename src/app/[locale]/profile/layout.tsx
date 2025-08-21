import "@/app/ui/globals.css";
import type { Metadata } from "next";
import Top from "../../components/Top";
import { ViewProvider } from "../../context/ViewContext";
import { Providers } from "../../providers";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "@/app/components/Footer";
import FloatingCV from "@/app/components/FloatingCV";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Emmanuel Morales CV",
  description: "Desarrollador Web Full Stack",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body>
        <Providers>
          <NextIntlClientProvider>
            <ViewProvider>
              <Top />
              <FloatingCV />
              <main>{children}</main>
            </ViewProvider>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
