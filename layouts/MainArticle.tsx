import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Global } from '@emotion/react'

interface MainArticleProps {
    children: JSX.Element[] | JSX.Element
    title?: string
}

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
}

const MainArticle = ({ children, title = 'Home' }: MainArticleProps) => {
    const GridItemStyle = () => {
        return (
            <Global
                styles={`
                    .grid-item-thumbnail {
                        border-radius: 12px;
                    }
                `}
            />
        )
    }

    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            <>
                {title && (
                    <Head>
                        <title>{title} - Nguyen Ngoc Tan</title>
                        <meta name="twitter:title" content={title} />
                        <meta property="og:title" content={title} />
                    </Head>
                )}
                {children}

                <GridItemStyle />
            </>
        </motion.article>
    )
}
export default MainArticle
