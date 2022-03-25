import React from 'react'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

interface GridItemProps {
    children: JSX.Element[] | JSX.Element
    href: any
    title: string
    thumbnail: string
}

export default function GridItem({ children, href, title, thumbnail }: GridItemProps) {
    return (
        <Box w="100%" textAlign="center">
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Box>
    )
}
