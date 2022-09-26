import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import MainArticle from '@/layouts/MainArticle'
import WorkTitle from '@/components/works/WorkTitle'
import WorkParagraph from '@/components/works/WorkParagraph'
import WorkMetadata from '@/components/works/WorkMetadata'
import WorkImage from '@/components/works/WorkImage'

export default function Movie() {
    return (
        <MainArticle title="market247">
            <Container>
                <WorkTitle>
                    Movies <Badge>06/2022-09/2022</Badge>
                </WorkTitle>

                <WorkParagraph>
                    A Movie website that get APIs from https://api.themoviedb.org/3/
                </WorkParagraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <WorkMetadata>Website</WorkMetadata>
                        <Link href="https://movies.oneduck.me/" isExternal>
                            https://movies.oneduck.me <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Platform</WorkMetadata>
                        <Text as="span">Web</Text>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Stack</WorkMetadata>
                        <Text as="span">
                            Next.js (12.3.1), Vercel SWR, Typescript, Tailwind Css
                        </Text>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/movie_img.webp" alt="movie 01" />
                <WorkImage src="/images/works/movie_img_01.webp" alt="movie 02" />
            </Container>
        </MainArticle>
    )
}

export { getServerSideProps } from '@/setup/Charka'
