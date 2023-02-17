import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  const { siteSettings } = pageProps
  if (!siteSettings) {
    throw new Error(
      `[route: ${router.asPath}] Site settings were not fetched. Did you forget to include fetchSiteSettings in getStaticProps?`,
    )
  }
  return (
    <>
      <header
        style={{
          padding: '20px',
          backgroundColor: 'pink',
          textAlign: 'center',
        }}
      >
        {siteSettings.header.text}
      </header>

      <Component {...pageProps} />
    </>
  )
}
