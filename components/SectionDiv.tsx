import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface SectionDivProps {
    children: JSX.Element[] | JSX.Element
    delay?: number
}

const MotionBox = motion(Box)

export default function SectionDiv({ children, delay = 0 }: SectionDivProps) {
    return (
        <MotionBox
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay }}
        >
            <Box mb={6}>{children}</Box>
        </MotionBox>
    )
}
