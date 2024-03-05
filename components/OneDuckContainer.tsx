import { Box } from '@chakra-ui/react'
import React, { memo } from 'react'

type Props = {
    forwardedRef?: React.RefObject<any>
    children?: React.ReactNode
}

export const OneDuckContainer = memo<Props>(function OneDuckContainer({ forwardedRef, children }) {
    return (
        <Box
            ref={forwardedRef}
            className="one-duck"
            m="auto"
            mt={['-20px', '-60px', '-190px']}
            mb={['-40px', '-140px', '-140px']}
            w={[280, 480, 640]}
            h={[280, 480, 640]}
            position="relative"
            bg="transparent"
        >
            {children}
        </Box>
    )
})
