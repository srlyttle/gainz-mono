import { ApolloProvider } from '@apollo/client'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import client from '../apollo/client'
import { DashboardLayout } from '../components/Layout/DashboardLayout'

import theme from '../theme/theme'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return (
        <ApolloProvider client={client}>
            <ChakraProvider resetCSS theme={theme}>
                <ColorModeProvider
                    options={{
                        useSystemColorMode: true,
                    }}
                >
                    {getLayout(<Component {...pageProps} />)}
                </ColorModeProvider>
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default MyApp
