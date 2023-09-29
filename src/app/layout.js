import './globals.css';
import { TopBar } from './components/TopBar.js';
import { AsideBar } from './components/AsideBar.js';


export const metadata = {
  title: 'GlassCore',
  description: 'Academic System',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      <body>
        <landing />
        <AsideBar/>
        <TopBar/>

        {children}
      </body>
      
    </html>
    
  )
}
