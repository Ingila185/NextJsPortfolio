import NavBar from '@/app/[lang]/components/_NavBar';
import '../app/globals.css';
import { ThemeProvider } from 'next-themes';
import Template from '@/app/[lang]/template';
import { AnimatePresence } from 'framer-motion';
export default function App({ Component, pageProps } : any) {
  return ( 
    <Template>
  <NavBar />
  <Component {...pageProps} />
  </Template>
  )
}