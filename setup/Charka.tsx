import React from 'react'
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import theme from '@/theme/theme'

interface CharkaProps {
    children: JSX.Element[] | JSX.Element
    cookies: string
}

export default function Charka({ cookies, children }: CharkaProps) {
    const colorModeManager =
        typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager
    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}

export async function getServerSideProps({ request }: any) {
    return {
        props: {
            cookies: request?.headers.cookie ?? '',
        },
    }
}
