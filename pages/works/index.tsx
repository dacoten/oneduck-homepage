import React from 'react'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import MainArticle from '@/layouts/MainArticle'
import SectionDiv from '@/components/SectionDiv'
import WorkGridItem from '@/components/grid/WorkGridItem'

export default function Work() {
    return (
        <MainArticle title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <SectionDiv>
                        <WorkGridItem
                            id="nftciti"
                            title="NFT Citi"
                            thumbnail="/images/works/nft_citi.webp"
                        >
                            A website that provides web3 marketplace for NFTs and crypto
                            collectibles. Browse, create, buy, sell, and auction NFTs using NFTCiti
                            today
                        </WorkGridItem>
                    </SectionDiv>

                    <SectionDiv>
                        <WorkGridItem
                            id="market247"
                            title="Market247 News"
                            thumbnail="/images/works/market247_img_01.avif"
                        >
                            Crypto Insight. All questions about NFT, Play-to-earn, Web3, DeFi, and
                            Metaverse will be addressed in this section
                        </WorkGridItem>
                    </SectionDiv>

                    <SectionDiv>
                        <WorkGridItem
                            id="market"
                            title="Market NFT"
                            thumbnail="/images/works/marketplace.png"
                        >
                            A B2C system that integrates Blockchain technology. Users can buy/sell
                            their NFT on the Market.
                        </WorkGridItem>
                    </SectionDiv>

                    <SectionDiv>
                        <WorkGridItem
                            id="staking"
                            title="Staking"
                            thumbnail="/images/works/staking.png"
                        >
                            2,404,171.5361 staked KSC and increasing. 16 available options to boost
                            your earning and chance to receive extra items
                        </WorkGridItem>
                    </SectionDiv>
                </SimpleGrid>

                <SectionDiv delay={0.4}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Old Projects
                    </Heading>

                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <SectionDiv>
                            <WorkGridItem
                                id="vietfood"
                                title="Viet Food"
                                thumbnail="/images/works/viet-food.png"
                            >
                                A online Store for buying food.
                            </WorkGridItem>
                        </SectionDiv>

                        <SectionDiv>
                            <WorkGridItem
                                id="trytoeic"
                                title="Try Toeic"
                                thumbnail="/images/works/trytoeic.png"
                            >
                                A Online TOEIC Exam Test for people who wants to improve your
                                English.
                            </WorkGridItem>
                        </SectionDiv>
                    </SimpleGrid>
                </SectionDiv>
            </Container>
        </MainArticle>
    )
}

export { getServerSideProps } from '@/setup/Charka'
