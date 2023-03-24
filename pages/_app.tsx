import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import 'react-multi-carousel/lib/styles.css'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          brand: ['#fe1d17', '#fe1d17', '#fe1d17', '#fe1d17', '#fe1d17', '#fe1d17', '#fe1d17', '#fe1d17', '#fe1d17', '#fe1d17'],
        },
        primaryColor: 'brand',
        fontFamily: inter.style.fontFamily,
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}
