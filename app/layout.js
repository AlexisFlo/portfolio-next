import './globals.css'
import { Inter } from 'next/font/google';
import Sidebar from './components/sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alexis Flores',
  description: 'Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
        </main>
        </body>|
    </html>
  )
}
