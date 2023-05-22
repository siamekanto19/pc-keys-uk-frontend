import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import 'react-multi-carousel/lib/styles.css'
import '@/styles/globals.css'
import CartDrawer from '@/components/cart/CartDrawer'
import UserAuthDrawer from '@/components/auth/UserAuthDrawer'
import Progressbar from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { CartProvider } from 'react-use-cart'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
})

export const apollo = new ApolloClient({
  uri: 'https://cms.pckeys.uk/web/index.php?p=admin/actions/graphql/api',
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ApolloProvider client={apollo}>
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
          <Progressbar color='var(--mantine-color-brand-0)' options={{ showSpinner: false }} />
          <Component {...pageProps} />
          <Toaster />
          <CartDrawer />
          <UserAuthDrawer />
        </MantineProvider>
      </ApolloProvider>
    </CartProvider>
  )
}
