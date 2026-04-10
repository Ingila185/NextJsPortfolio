"use client";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProviderWrapper({
  children,
  locale,
  messages, 
}: {
  children: ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
