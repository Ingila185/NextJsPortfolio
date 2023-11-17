import NavBar from '@/app/components/_NavBar';
import '../app/globals.css';
import { ThemeProvider } from 'next-themes';
export default function App({ Component, pageProps } : any) {
  return ( 
  <main className='flex flex-col items-center justify-center'> 
<ThemeProvider attribute='class'>
  <NavBar />
  <Component {...pageProps} /> 
    </ThemeProvider>
  </main> 
  )
}