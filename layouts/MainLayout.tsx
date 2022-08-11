import React from 'react'
import { Router } from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '@/layouts/NavBar'
import Footer from '@/layouts/Footer'
import OneDuckLoader from '@/components/OneDuckLoader'

interface MainLayoutProps {
    children: JSX.Element[] | JSX.Element
    router: Router
}

const LazyOneDuck = dynamic(() => import('@/components/OneDuck'), {
    ssr: false,
    loading: () => <OneDuckLoader />,
})

export default function MainLayout({ children, router }: MainLayoutProps) {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="OneDuck's homepage" />
                <meta name="author" content="Nguyen Ngoc Tan" />
                <meta name="author" content="oneduck" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@oneduck" />
                <meta name="twitter:creator" content="@oneduck" />
                <meta property="og:site_name" content="Nguyen Ngoc Tan's Homepage" />
                <meta property="og:type" content="website" />
                <title>Nguyen Ngoc Tan - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyOneDuck />

                {children}

                <Footer />
            </Container>
        </Box>
    )
}
