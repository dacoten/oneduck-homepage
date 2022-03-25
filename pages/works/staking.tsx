import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import MainArticle from '@/layouts/MainArticle'
import WorkTitle from '@/components/works/WorkTitle'
import WorkParagraph from '@/components/works/WorkParagraph'
import WorkMetadata from '@/components/works/WorkMetadata'
import WorkImage from '@/components/works/WorkImage'

export default function Staking() {
    return (
        <MainArticle title="Staking">
            <Container>
                <WorkTitle>
                    Staking <Badge>11/2021-01/2022</Badge>
                </WorkTitle>

                <WorkParagraph>
                    2,404,171.5361 staked KSC and increasing. 16 available options to boost your
                    earning and chance to receive extra items
                </WorkParagraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <WorkMetadata>Website</WorkMetadata>
                        <Link href="https://staking.kingspeed.io/" isExternal>
                            https://staking.kingspeed.io <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Platform</WorkMetadata>
                        <Text as="span">Web</Text>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Stack</WorkMetadata>
                        <Text as="span">
                            React, Typescript, Chakra UI, Web3.js, Nest.js, AWS, Vercel
                        </Text>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>BlogPost</WorkMetadata>
                        <Link
                            href="https://www.globenewswire.com/news-release/2021/12/21/2356028/0/en/KingSpeed-Officially-Launches-Its-Staking-System-to-Reward-Users-With-Up-to-97-APY.html"
                            isExternal
                        >
                            KingSpeed Officially Launches Its Staking System to Reward Users With Up
                            to 97% APY <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/staking_img_01.png" alt="Staking 01" />
                <WorkImage src="/images/works/staking_img_02.png" alt="Staking 02" />
            </Container>
        </MainArticle>
    )
}

export { getServerSideProps } from '@/setup/Charka'
