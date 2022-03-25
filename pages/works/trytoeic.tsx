import React from 'react'
import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import MainArticle from '@/layouts/MainArticle'
import WorkTitle from '@/components/works/WorkTitle'
import WorkParagraph from '@/components/works/WorkParagraph'
import WorkMetadata from '@/components/works/WorkMetadata'
import WorkImage from '@/components/works/WorkImage'

export default function TryToeic() {
    return (
        <MainArticle title="Market NFT">
            <Container>
                <WorkTitle>
                    Online Toeic Exam <Badge>2020-2021</Badge>
                </WorkTitle>

                <WorkParagraph>
                    I really want to improve my English. So, I made the website. I hope Try-Toeic
                    can help me and people improve English skills.
                </WorkParagraph>

                <List ml={4} my={4}>
                    <ListItem>
                        <WorkMetadata>Website</WorkMetadata>
                        <Link href="https://try-toeic.vercel.app/" isExternal>
                            https://try-toeic.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Platform</WorkMetadata>
                        <Text as="span">Web, Web Mobile</Text>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>User/password Test</WorkMetadata>
                        <Text as="span">trytoeic@gmail.com/trytoeic</Text>
                    </ListItem>
                    <ListItem>
                        <WorkMetadata>Stack</WorkMetadata>
                        <Text as="span">
                            React, Spring Boot, Ant Design, AWS (RDS, Elastic Beanstalk ...)
                        </Text>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/try_toeic_img_01.png" alt="try toeic 01" />
                <WorkImage src="/images/works/try_toeic_img_02.png" alt="try toeic 02" />
                <WorkImage src="/images/works/try_toeic_img_03.png" alt="try toeic 03" />
                <WorkImage src="/images/works/try_toeic_img_04.png" alt="try toeic 04" />
            </Container>
        </MainArticle>
    )
}

export { getServerSideProps } from '@/setup/Charka'
