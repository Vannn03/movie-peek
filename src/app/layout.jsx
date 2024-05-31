import './globals.css'
import { roboto } from './fonts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Movie Peek',
    description: 'Movie Database Website',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="/tab-icon.svg"
                    type="image/svg"
                    sizes="any"
                />
            </head>
            <body className={roboto.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
