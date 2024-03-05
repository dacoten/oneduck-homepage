import React from 'react'
import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { SiDuckduckgo } from 'react-icons/si'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-size: 18px;
    display: flex;
    align-items: center;
    line-height: 20px;
    padding: 10px;
    cursor: pointer;

    .icon-duck {
        transition: 200ms ease;
    }

    &:hover .icon-duck {
        transform: rotate(30deg);
    }
`

export default function Logo() {
    return (
        <Link href="/" scroll={false}>
            <LogoBox>
                <SiDuckduckgo className="icon-duck" />
                <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} ml={1}>
                    Nguyen Ngoc Tan
                </Text>
            </LogoBox>
        </Link>
    )
}
