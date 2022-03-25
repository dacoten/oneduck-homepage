import React, { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

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

export const OneDuckContainer = forwardRef<HTMLDivElement, any>(({ children }, ref: any) => (
    <Box
        ref={ref}
        className="one-duck"
        m="auto"
        mt={['-20px', '-60px', '-190px']}
        mb={['-40px', '-140px', '-140px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
    >
        {children}
    </Box>
))

const OneDuckLoader = () => {
    return (
        <OneDuckContainer>
            <OneDuckSpinner />
        </OneDuckContainer>
    )
}

export default OneDuckLoader
