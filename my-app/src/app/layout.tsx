import './globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//FONTS
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>

      </head>
      <body className='my-5 "mx-2 md:mx-10 lg:mx-24 xl:mx-32 2xl:mx-40'>
        <header>
        <Navbar />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}