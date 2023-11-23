import NavBar from '@/app/components/_NavBar';
import '../app/globals.css';
import { ThemeProvider } from 'next-themes';
import Template from '@/app/template';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps } : any) {
  return ( 
    <Template>
      
  <main className='min-h-screen w-full'> 
<ThemeProvider attribute='class'>
  <NavBar />
  <Component {...pageProps} /> 
    </ThemeProvider>
  </main> 
  </Template>
  )
}