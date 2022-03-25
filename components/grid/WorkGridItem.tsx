import React from 'react'
import NextLink from 'next/link'
import { Global } from '@emotion/react'
import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'

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
                object-fit: cover
            }
        `}
    />
)

const WorkGridItem = ({ children, id, title, thumbnail }: WorkGridItemProps) => {
    return (
        <Box w="100%" textAlign="center">
            <NextLink href={`/works/${id}`} scroll={false}>
                <LinkBox cursor="pointer">
                    <Image
                        src={thumbnail}
                        alt={title}
                        className="grid-item-thumbnail"
                        height="130px"
                        width="100%"
                        objectFit="cover"
                    />
                    <LinkOverlay href={`/works/${id}`}>
                        <Text mt={2} fontSize={20}>
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>{children}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    )
}

export default WorkGridItem
