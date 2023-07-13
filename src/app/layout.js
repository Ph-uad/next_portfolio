import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default : 'Phuad',
    template : '%s | Phuad'
  },
  description: 'Discover the works of a web developer, with the focus of delivering efficient and well designed website.',
  keywords : ['My Portfolio', 'Next.js'],

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" href="./favicon.ico" sizes="any" />

      <body className={ inter.className }>{ children }</body>
    </html>
  )
}
