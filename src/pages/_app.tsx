import React from 'react'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { defaultTheme } from 'default-theme'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@gql/apollo-client'

// @see https://next.material-ui.com/guides/server-rendering/
const cache = createCache({ key: 'css', prepend: true })
cache.compat = true

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  )
}
export default MyApp
