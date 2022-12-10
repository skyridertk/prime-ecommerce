import './globals.css'
import localFont from '@next/font/local'
import Header from '@/components/Header'
import { Footer } from './components/Footer'

const myFont = localFont({
    src: [
        {
            path: '../assets/NormalidadWide-Thin.woff2',
            weight: '300',
        },
    ],
    fallback: ['Helvetica', 'ui-sans-serif'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={myFont.className}>
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className='w-screen'>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
