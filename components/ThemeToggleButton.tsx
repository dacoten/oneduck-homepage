import React from 'react'
import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode()

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <MotionBox
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                />
            </MotionBox>
        </AnimatePresence>
    )
}
