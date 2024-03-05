import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Charka from '@/setup/Charka'
import theme from '@/theme/theme'
import Fonts from '@/components/Fonts'
import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.css'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Charka cookies={pageProps.cookies}>
                <Fonts />
                <MainLayout router={router}>
                    <Component {...pageProps} key={router.route} />
                </MainLayout>
            </Charka>
        </ChakraProvider>
    )
}

export default MyApp
