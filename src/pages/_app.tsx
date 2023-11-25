import NavBar from '@/app/components/_NavBar';
import '../app/globals.css';
import { ThemeProvider } from 'next-themes';
import Template from '@/app/template';
import { AnimatePresence } from 'framer-motion';
export default function App({ Component, pageProps } : any) {
  return ( 
    <Template>
  <ThemeProvider attribute='class' defaultTheme='dark'>    
  <NavBar />
  <Component {...pageProps} />
  </ThemeProvider>

  </Template>
  )
}