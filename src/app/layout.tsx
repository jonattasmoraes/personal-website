import type { Metadata } from 'next'
import { Manjari } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalCss } from './styles'

const manjari = Manjari({
  subsets: ['latin'],
  weight: ['100', '400', '700']
})

export const metadata: Metadata = {
  title: 'Jôn - Fullstack Developer',
  description: 'Only a personal website',
  icons: {
    icon: '/tempIcon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={manjari.className}>
        <StyledComponentsRegistry>
          <GlobalCss />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
