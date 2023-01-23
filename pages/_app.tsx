import { Layout } from '@/components/common/Layout'
import GlobalStyles from '@/configs/theme'
import { GlobalContextProvider } from '@/context/GlobalContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalContextProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextProvider>
    </>
  )
}
