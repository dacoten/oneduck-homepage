import React from 'react'
import { Flex } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Flex align="center" justifyContent="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} Nguyen Ngoc Tan
        </Flex>
    )
}
