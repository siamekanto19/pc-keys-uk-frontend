import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import 'react-multi-carousel/lib/styles.css'
import '@/styles/globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
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
        fontFamily: openSans.style.fontFamily,
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}
