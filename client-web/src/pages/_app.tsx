import { ApolloProvider } from '@apollo/client'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import client from '../apollo/client'

import theme from '../theme/theme'

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider resetCSS theme={theme}>
                <ColorModeProvider
                    options={{
                        useSystemColorMode: true,
                    }}
                >
                    <Component {...pageProps} />
                </ColorModeProvider>
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default MyApp
