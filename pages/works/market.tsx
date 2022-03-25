import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import MainArticle from '@/layouts/MainArticle'
import WorkTitle from '@/components/works/WorkTitle'
import WorkParagraph from '@/components/works/WorkParagraph'
import WorkMetadata from '@/components/works/WorkMetadata'
import WorkImage from '@/components/works/WorkImage'

export default function Market() {
    return (
        <MainArticle title="Market NFT">
            <Container>
                <WorkTitle>
                    Market NFT <Badge>11/2021- 03/2022</Badge>
                </WorkTitle>

                <WorkParagraph>
                    An integrated marketplace for trading C2C and B2C where you can find any good
                    NFTs for your needs.
                </WorkParagraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <WorkMetadata>Website</WorkMetadata>
                        <Link href="https://marketplace.kingspeed.io/" isExternal>
                            https://marketplace.kingspeed.io <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Platform</WorkMetadata>
                        <Text as="span">Web</Text>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Stack</WorkMetadata>
                        <Text as="span">
                            React, Typescript, Web3.js, Chakra UI, Nest.js, AWS, Vercel
                        </Text>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>BlogPost</WorkMetadata>
                        <Link
                            href="https://www.yahoo.com/news/kingspeed-launches-official-nft-marketplace-180900786.html?guccounter=1"
                            isExternal
                        >
                            KingSpeed Launches Official NFT Marketplace, Strengthening its Position
                            in the GameFi Industry <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/marketplace_img_01.png" alt="Marketplace 01" />
                <WorkImage src="/images/works/marketplace_img_02.png" alt="Marketplace 02" />
                <WorkImage src="/images/works/marketplace_img_03.png" alt="Marketplace 03" />
            </Container>
        </MainArticle>
    )
}

export { getServerSideProps } from '@/setup/Charka'
