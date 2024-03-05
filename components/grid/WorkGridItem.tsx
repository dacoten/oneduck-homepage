import React from 'react'
import NextLink from 'next/link'
import { Global } from '@emotion/react'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface WorkGridItemProps {
    children: string | JSX.Element[] | JSX.Element
    id: string | number
    title?: string
    thumbnail: string
}

export const GriGridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }
        `}
    />
)

const WorkGridItem = ({ children, id, title = '', thumbnail }: WorkGridItemProps) => {
    return (
        <Box w="100%" textAlign="center">
            <NextLink href={`/works/${id}`} scroll={false}>
                <Box cursor="pointer">
                    <Box pos="relative" height="130px" width="100%" overflow="hidden">
                        <Image src={thumbnail} alt={title} fill className="grid-item-thumbnail" />
                    </Box>
                    <Box>
                        <Text
                            mt={2}
                            fontSize={20}
                            color="var(--color-title)"
                            textDecoration="underline"
                        >
                            {title}
                        </Text>
                    </Box>
                    <Text fontSize={14}>{children}</Text>
                </Box>
            </NextLink>
        </Box>
    )
}

export default WorkGridItem
