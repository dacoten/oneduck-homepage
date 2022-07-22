import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import MainArticle from '@/layouts/MainArticle'
import WorkTitle from '@/components/works/WorkTitle'
import WorkParagraph from '@/components/works/WorkParagraph'
import WorkMetadata from '@/components/works/WorkMetadata'
import WorkImage from '@/components/works/WorkImage'

export default function Market247() {
    return (
        <MainArticle title="market247">
            <Container>
                <WorkTitle>
                    Market247 <Badge>04/2022-06/2022</Badge>
                </WorkTitle>

                <WorkParagraph>
                    A website that provides readers with meaningful and trustworthy information
                    about the emerging crypto economy
                </WorkParagraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <WorkMetadata>Website</WorkMetadata>
                        <Link href="https://market247.io/" isExternal>
                            https://market247.io <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Platform</WorkMetadata>
                        <Text as="span">Web</Text>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Stack</WorkMetadata>
                        <Text as="span">
                            Next.js, Typescript, Chakra UI, Strapi CMS, AWS, Vercel
                        </Text>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/market247_img_01.avif" alt="Staking 01" />
                <WorkImage src="/images/works/market247_img_02.jpg" alt="Staking 02" />
            </Container>
        </MainArticle>
    )
}

export { getServerSideProps } from '@/setup/Charka'
