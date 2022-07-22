import React from 'react'
import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import theme from '@/theme/theme'

interface CharkaProps {
    children: JSX.Element[] | JSX.Element
    cookies: string
}

export default function Charka({ cookies, children }: CharkaProps) {
    const colorModeManager =
        typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager

    console.log('colorModeManager', colorModeManager)
    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}

export async function getServerSideProps({ request }: any) {
    console.log('repuest', request)
    return {
        props: {
            cookies: request?.headers.cookie ?? '',
        },
    }
}
