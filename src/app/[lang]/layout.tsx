import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import NewNavBar from "./components/newNavBar";
import ThemeProviderWrapper from "./components/_themeProvider";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className="dark" suppressHydrationWarning >
      <body className="dark:bg-gradient-to-b from-black via-gray-950 to-gray-700">
        <ThemeProviderWrapper >
          <main className=" min-h-screen min-w-screen ">
            <NewNavBar />

            <div className="p-10 dark:text-gray-300">
              {children}
              <Analytics />
            </div>
          </main>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
