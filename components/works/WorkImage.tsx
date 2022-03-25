import React from 'react'
import { Image } from '@chakra-ui/react'

interface WorkImageProps {
    src: string
    alt: string
}

const WorkImage = ({ src, alt }: WorkImageProps) => {
    return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}

export default WorkImage
