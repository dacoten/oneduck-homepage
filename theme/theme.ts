import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { HtmlProps } from 'next/dist/shared/lib/utils'

const styles = {
    global: (props: HtmlProps) => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            fontFamily: 'Fredoka !important',
        },
    }),
}

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
    Link: {
        baseStyle: (props: HtmlProps) => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3,
        }),
    },
}

const colors = {
    grassTeal: '#88ccca',
}

const theme = extendTheme({ config, styles, components, colors })

export default theme
