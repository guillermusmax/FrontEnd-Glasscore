import '../Styles/globals.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'EyeLeaf',
  description: 'Pagina Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          
          {children}
          
        </main>
      </body>
    </html>
  )
}

