import './globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

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
    <html lang="en" className={montserrat.className} data-theme="light">
      <head>

      </head>
      <body className='my-5 mx-4 md:mx-20 lg:mx-36 xl:mx-48 2xl:mx-60'>
        <header>
          <Logo />
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