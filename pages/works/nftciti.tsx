import React from 'react'
import { Container, Badge, Link, List, ListItem, Text, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import MainArticle from '@/layouts/MainArticle'
import WorkTitle from '@/components/works/WorkTitle'
import WorkParagraph from '@/components/works/WorkParagraph'
import WorkMetadata from '@/components/works/WorkMetadata'
import WorkImage from '@/components/works/WorkImage'

export default function NFTCiti() {
    return (
        <MainArticle title="NFT Citi">
            <Container>
                <WorkTitle>
                    NFTCiti <Badge>07/2022-</Badge>
                </WorkTitle>

                <WorkParagraph>
                    A website that provides web3 marketplace for NFTs and crypto collectibles.
                    Browse, create, buy, sell, and auction NFTs using NFTCiti today
                </WorkParagraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <WorkMetadata>Website</WorkMetadata>
                        <Link href="http://3.136.71.236/" isExternal>
                            http://3.136.71.236/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Platform</WorkMetadata>
                        <Text as="span">Web</Text>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Stack</WorkMetadata>
                        <Text as="span">
                            Next.js, React Query, GraphQL, Typescript, Tailwind CSS, Nest.js, AWS
                        </Text>
                    </ListItem>
                </List>

                <WorkImage
                    src="/images/works/nft_citi_performance.jpg"
                    alt="nft citi performance"
                />
                <WorkImage src="/images/works/nft_citi_img_01.png" alt="nft citi 01" />
                <SimpleGrid columns={2} spacing={2}>
                    <WorkImage src="/images/works/nft_citi.webp" alt="nft citi 02" />
                    <WorkImage src="/images/works/nft_citi_img_02.webp" alt="nft citi 03" />
                </SimpleGrid>
            </Container>
        </MainArticle>
    )
}

export { getServerSideProps } from '@/setup/Charka'
