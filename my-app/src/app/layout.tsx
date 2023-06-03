import './globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
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