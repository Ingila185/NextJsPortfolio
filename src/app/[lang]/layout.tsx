import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import NewNavBar from "./components/newNavBar";
import ThemeProviderWrapper from "./components/_themeProvider";
import en from "../../../dictionaries/en.json";
import de from "../../../dictionaries/de.json";

const messages = { en, de };

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className="dark" suppressHydrationWarning>
      <body className="dark:bg-gradient-to-b from-black via-gray-950 to-gray-700">
        <ThemeProviderWrapper 
          locale={lang} 
          messages={messages[lang as keyof typeof messages]}
        >
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