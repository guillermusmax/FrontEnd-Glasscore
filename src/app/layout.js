import './globals.css';
import { Inter } from 'next/font/google';
import { TopBar } from './components/TopBar.js';
import { AsideBar } from './components/AsideBar.js';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GlassCore',
  description: 'Academic System',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      <body className={inter.className}>
        
        <AsideBar/>
        <TopBar/>

        {children}
      </body>
      
    </html>
    
  )
}
