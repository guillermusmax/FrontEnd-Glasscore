import '../Styles/globals.css'

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

