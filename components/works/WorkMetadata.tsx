import React from 'react'
import { Badge } from '@chakra-ui/react'

interface WorkMetadataProps {
    children: string | JSX.Element[] | JSX.Element
}

export default function WorkMetadata({ children }: WorkMetadataProps) {
    return (
        <Badge colorScheme="green" mr={2}>
            {children}
        </Badge>
    )
}
