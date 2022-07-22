import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import CSSReset from '@chakra-ui/css-reset'
import Charka from '@/setup/Charka'
import theme from '@/theme/theme'
import { AnimatePresence } from 'framer-motion'
import Fonts from '@/components/Fonts'
import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.css'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps, router }: AppProps) {
    console.log('pageProps.cookies', pageProps.cookies)
    return (
        <ChakraProvider theme={theme}>
            <Charka cookies={pageProps.cookies}>
                <Fonts />
                <CSSReset />

                <MainLayout router={router}>
                    <AnimatePresence
                        exitBeforeEnter
                        initial={true}
                        onExitComplete={() => {
                            if (typeof window !== 'undefined') {
                                window.scrollTo({ top: 0 })
                            }
                        }}
                    >
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </MainLayout>
            </Charka>
        </ChakraProvider>
    )
}

export default MyApp
