import React, { memo } from 'react'
import { Spinner } from '@chakra-ui/react'
import { OneDuckContainer } from './OneDuckContainer'

export const OneDuckSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

export const OneDuckLoader = memo<{}>(function OneDuckLoader() {
    return (
        <OneDuckContainer>
            <OneDuckSpinner />
        </OneDuckContainer>
    )
})
