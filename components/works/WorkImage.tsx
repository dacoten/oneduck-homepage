import React from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

interface WorkImageProps {
    src: string
    alt: string
    width?: string | number
    height?: string | number
}

const WorkImage = ({ src, alt, height = '300px', width = '100%' }: WorkImageProps) => {
    return (
        <Box pos="relative" borderRadius="lg" w={width} height={height} overflow="hidden" mb={4}>
            <Image layout="fill" src={src} alt={alt} objectFit="cover" />
        </Box>
    )
}

export default WorkImage
