import React, { HTMLProps } from 'react'
import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface WorkTitleProps {
    children: HTMLProps<string>
}

export default function WorkTitle({ children }: WorkTitleProps) {
    return (
        <Box>
            <NextLink href="/works">
                <Link>Works</Link>
            </NextLink>
            <span>
                {' '}
                <ChevronRightIcon />{' '}
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    )
}
