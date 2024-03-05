import type { NextPage } from 'next'
import NextLink from 'next/link'
import Image from 'next/image'
import {
    Link,
    Container,
    Heading,
    Box,
    Button,
    List,
    ListItem,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import { SiLeetcode } from 'react-icons/si'
import { FaGlobeAmericas } from 'react-icons/fa'
import MainArticle from '@/layouts/MainArticle'
import SectionDiv from '@/components/SectionDiv'
import { BioSection, BioYear } from '@/components/Biography'
import styled from '@emotion/styled'
import WorkImage from '@/components/works/WorkImage'

const Paragraph = styled.p`
    text-align: justify;
    text-indent: 1em;
`

const Home: NextPage = () => {
    return (
        <MainArticle>
            <Container>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                >
                    Hello, I&apos;m a full-stack developer!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Nguyen Ngoc Tan
                        </Heading>
                        <Box as="p">Developer / DevOps / Web3 developer (Dapp)</Box>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <Image
                                src="/images/oneduck.webp"
                                alt="profile image"
                                width={100}
                                height={100}
                            />
                        </Box>
                    </Box>
                </Box>

                <SectionDiv delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        I am a full-stack developer. I have experience with all stages of the
                        development cycle for dynamic web projects with small, medium and big-sized
                        companies. I always try to find cutting-edge technologies and challenge
                        myself to implement an application that utilizes those technologies.
                    </Paragraph>
                    <Box textAlign="center" my={4}>
                        <NextLink href="/works" scroll={false}>
                            <Button rightIcon={<ChevronRightIcon />} bg="#ff63c3">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </SectionDiv>

                <SectionDiv delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Completed the Information Technology of Hanoi University of Science and
                        Technology
                    </BioSection>
                    <BioSection>
                        <BioYear>2014 - 2019</BioYear>
                        Worked at Vietnam
                    </BioSection>
                    <BioSection>
                        <BioYear>2020 to present</BioYear>
                        Worked at Japan
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 to present</BioYear>
                        Worked at Rakuten
                    </BioSection>
                </SectionDiv>

                <SectionDiv delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>Clean Coding, DevOps, Learn cutting-edge technologies</Paragraph>
                </SectionDiv>

                <SectionDiv delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/dacoten" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="rgb(255, 171, 0)"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    @dacoten
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://leetcode.com/oneduck/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="rgb(255, 171, 0)"
                                    leftIcon={<SiLeetcode />}
                                >
                                    @oneduck (Leetcode)
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://rakutengrace.wordpress.com/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="rgb(255, 171, 0)"
                                    leftIcon={<FaGlobeAmericas />}
                                >
                                    @oneduck
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </SectionDiv>

                <SectionDiv delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Oneduck.me
                    </Heading>
                    <Box mt="20px">
                        <WorkImage src="/oneduck_performance.png" alt="one duck" />
                    </Box>
                </SectionDiv>

                <SectionDiv delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Certificates
                    </Heading>
                    <Box mt="20px">
                        <HStack spacing="20px">
                            <Box>
                                <Image
                                    src="/images/certificates/hacker_rank_react.webp"
                                    width={150}
                                    height={150}
                                    alt="hacker rank react"
                                />
                            </Box>
                            <Box>
                                <Image
                                    src="/images/certificates/binary_search_1.png"
                                    width={150}
                                    height={150}
                                    alt="binary search 1"
                                />
                            </Box>
                        </HStack>
                    </Box>
                </SectionDiv>
            </Container>
        </MainArticle>
    )
}

export default Home
export { getServerSideProps } from '@/setup/Charka'
