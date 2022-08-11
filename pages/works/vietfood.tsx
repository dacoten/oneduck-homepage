import React from 'react'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import MainArticle from '@/layouts/MainArticle'
import WorkTitle from '@/components/works/WorkTitle'
import WorkParagraph from '@/components/works/WorkParagraph'
import WorkMetadata from '@/components/works/WorkMetadata'
import WorkImage from '@/components/works/WorkImage'

export default function VietFood() {
    return (
        <MainArticle title="Viet Food">
            <Container>
                <WorkTitle>
                    Viet Food Store Online <Badge>2019-2020</Badge>
                </WorkTitle>

                <WorkParagraph>
                    Shop for Vietnamese Community in Japan. A store website with over 300 online
                    invoices per month.
                </WorkParagraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <WorkMetadata>Website</WorkMetadata>
                        <Link
                            href="http://viet-food.com.s3-website-ap-northeast-1.amazonaws.com/"
                            isExternal
                        >
                            http://viet-food.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Platform</WorkMetadata>
                        <span>Web, Web Mobile</span>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Stack</WorkMetadata>
                        <span>React, Spring Boot, AWS (RDS, Elastic Beanstalk, Router53 ...)</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/vietfood_img_01.png" alt="vietfood 01" />
                <WorkImage src="/images/works/vietfood_img_02.png" alt="vietfood 02" />
            </Container>
        </MainArticle>
    )
}

export { getServerSideProps } from '@/setup/Charka'
