import NavBar from '@/app/[lang]/components/_NavBar';
import '../app/globals.css';
import { ThemeProvider } from 'next-themes';
import Template from '@/app/[lang]/template';
import { AnimatePresence } from 'framer-motion';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function App({ Component, pageProps } : any) {
 const messages = useMessages();

  return ( 

    <Template>
          <NextIntlClientProvider messages={messages} locale='en'> // Replace with your messages object

  <NavBar />
  <Component {...pageProps} />
  </NextIntlClientProvider>
  </Template>
  )
}