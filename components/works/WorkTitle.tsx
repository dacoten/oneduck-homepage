import React from 'react'
import { Heading, HStack, Box, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

interface WorkTitleProps {
    children: React.ReactNode
}

export default function WorkTitle({ children }: WorkTitleProps) {
    const router = useRouter()
    return (
        <HStack mb={4} gap={1}>
            <Box>
                <Link onClick={() => router.push('/works')}>Works</Link>
                <Box as="span" pl={1}>
                    <ChevronRightIcon />{' '}
                </Box>
            </Box>

            <Heading display="inline-block" as="h3" fontSize={20}>
                {children}
            </Heading>
        </HStack>
    )
}
