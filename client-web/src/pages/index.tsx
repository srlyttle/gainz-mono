// Chakra imports
import {
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Portal,
    Progress,
    SimpleGrid,
    Spacer,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
// assets
import peopleImage from '../assets/img/people-image.png'
import logoChakra from '../assets/svg/logo-white.svg'
// Custom components
import { Card } from '../components/Card/Card'
import { CardBody } from '../components/Card/CardBody'
import { CardHeader } from '../components/Card/CardHeader'
import { BarChart } from '../components/Charts/BarChart'
import { LineChart } from '../components/Charts/LineChart'
import { IconBox } from '../components/Icons/IconBox'
// Custom icons
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    RocketIcon,
    StatsIcon,
    WalletIcon,
} from '../components/Icons/Icons.js'
import { DashboardTableRow } from '../components/Tables/DashboardTableRow'
import { TimelineRow } from '../components/Tables/TimelineRow'
import React, { ReactElement, useState } from 'react'
// react icons
import { BsArrowRight } from 'react-icons/bs'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { dashboardTableData, timelineData } from '../variables/general'
import { DashboardLayout } from '../components/Layout/DashboardLayout'
import { useSplitsQuery } from '../generated/graphql'
export default function Index() {
    const value = '$100.000'
    // Chakra Color Mode
    const { colorMode, toggleColorMode } = useColorMode()
    const iconTeal = useColorModeValue('teal.300', 'teal.300')
    const iconBoxInside = useColorModeValue('white', 'white')
    const textColor = useColorModeValue('gray.700', 'white')
    const bgButton = useColorModeValue(
        'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)',
        'gray.800',
    )
    const [series, setSeries] = useState([
        {
            type: 'area',
            name: 'Mobile apps',
            data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
        },
        {
            type: 'area',
            name: 'Websites',
            data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
        },
    ])
    const overlayRef = React.useRef()
    const { data } = useSplitsQuery()
    console.log('datattattatat', data?.splits)
    return (
        <Flex flexDirection="column" pt={{ base: '120px', md: '75px' }}>
            <SimpleGrid pb={4} columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
                <Card minH="83px">
                    <CardBody>
                        <Flex
                            flexDirection="row"
                            align="center"
                            justify="center"
                            w="100%"
                        >
                            <Stat me="auto">
                                <StatLabel
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="bold"
                                    pb=".1rem"
                                >
                                    Weekly workouts
                                </StatLabel>
                                <Flex>
                                    <StatNumber
                                        fontSize="lg"
                                        color={textColor}
                                        pr="1rem"
                                    >
                                        3
                                    </StatNumber>
                                    <StatHelpText
                                        alignSelf="flex-end"
                                        justifySelf="flex-end"
                                        m="0px"
                                        color="green.400"
                                        fontWeight="bold"
                                        ps="3px"
                                        fontSize="md"
                                    >
                                        +55%
                                    </StatHelpText>
                                </Flex>
                            </Stat>
                            <IconBox
                                as="box"
                                h={'45px'}
                                w={'45px'}
                                bg={iconTeal}
                            >
                                <WalletIcon
                                    h={'24px'}
                                    w={'24px'}
                                    color={iconBoxInside}
                                />
                            </IconBox>
                        </Flex>
                    </CardBody>
                </Card>
                <Card minH="83px">
                    <CardBody>
                        <Flex
                            flexDirection="row"
                            align="center"
                            justify="center"
                            w="100%"
                        >
                            <Stat me="auto">
                                <StatLabel
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="bold"
                                    pb=".1rem"
                                >
                                    Weekly Clients
                                </StatLabel>
                                <Flex>
                                    <StatNumber
                                        pr="1rem"
                                        fontSize="lg"
                                        color={textColor}
                                    >
                                        1
                                    </StatNumber>
                                    <StatHelpText
                                        alignSelf="flex-end"
                                        justifySelf="flex-end"
                                        m="0px"
                                        color="green.400"
                                        fontWeight="bold"
                                        ps="3px"
                                        fontSize="md"
                                    >
                                        0%
                                    </StatHelpText>
                                </Flex>
                            </Stat>
                            <IconBox
                                as="box"
                                h={'45px'}
                                w={'45px'}
                                bg={iconTeal}
                            >
                                <GlobeIcon
                                    h={'24px'}
                                    w={'24px'}
                                    color={iconBoxInside}
                                />
                            </IconBox>
                        </Flex>
                    </CardBody>
                </Card>
                <Card minH="83px">
                    <CardBody>
                        <Flex
                            flexDirection="row"
                            align="center"
                            justify="center"
                            w="100%"
                        >
                            <Stat>
                                <StatLabel
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="bold"
                                    pb=".1rem"
                                >
                                    Joiners
                                </StatLabel>
                                <Flex>
                                    <StatNumber
                                        pr="1rem"
                                        fontSize="lg"
                                        color={textColor}
                                    >
                                        0
                                    </StatNumber>
                                    <StatHelpText
                                        alignSelf="flex-end"
                                        justifySelf="flex-end"
                                        m="0px"
                                        color="green.400"
                                        fontWeight="bold"
                                        ps="3px"
                                        fontSize="md"
                                    >
                                        0%
                                    </StatHelpText>
                                </Flex>
                            </Stat>
                            <Spacer />
                            <IconBox
                                as="box"
                                h={'45px'}
                                w={'45px'}
                                bg={iconTeal}
                            >
                                <DocumentIcon
                                    h={'24px'}
                                    w={'24px'}
                                    color={iconBoxInside}
                                />
                            </IconBox>
                        </Flex>
                    </CardBody>
                </Card>
                <Card minH="83px">
                    <CardBody>
                        <Flex
                            flexDirection="row"
                            align="center"
                            justify="center"
                            w="100%"
                        >
                            <Stat me="auto">
                                <StatLabel
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="bold"
                                    pb=".1rem"
                                >
                                    Total Workouts
                                </StatLabel>
                                <Flex>
                                    <StatNumber
                                        fontSize="lg"
                                        color={textColor}
                                        fontWeight="bold"
                                        pr="1rem"
                                    >
                                        3
                                    </StatNumber>
                                    <StatHelpText
                                        alignSelf="flex-end"
                                        justifySelf="flex-end"
                                        m="0px"
                                        color="red.500"
                                        fontWeight="bold"
                                        ps="3px"
                                        fontSize="md"
                                    >
                                        -14%
                                    </StatHelpText>
                                </Flex>
                            </Stat>
                            <IconBox
                                as="box"
                                h={'45px'}
                                w={'45px'}
                                bg={iconTeal}
                            >
                                <CartIcon
                                    h={'24px'}
                                    w={'24px'}
                                    color={iconBoxInside}
                                />
                            </IconBox>
                        </Flex>
                    </CardBody>
                </Card>
            </SimpleGrid>
            <SimpleGrid pb={4} columns={{ sm: 1, md: 2, xl: 2 }} spacing="24px">
                <Card p="28px 10px 16px 0px" mb={{ sm: '26px', lg: '0px' }}>
                    <CardHeader mb="20px" pl="22px">
                        <Flex direction="column" alignSelf="flex-start">
                            <Text
                                fontSize="lg"
                                color={textColor}
                                fontWeight="bold"
                                mb="6px"
                            >
                                Performance Overview
                            </Text>
                            <Text
                                fontSize="md"
                                fontWeight="medium"
                                color="gray.400"
                            >
                                <Text
                                    as="span"
                                    color="green.400"
                                    fontWeight="bold"
                                >
                                    (+5%) more
                                </Text>{' '}
                                in 2021
                            </Text>
                        </Flex>
                    </CardHeader>
                    <Box w="100%" h={{ sm: '300px' }} ps="8px">
                        <LineChart />
                    </Box>
                </Card>
                <Card maxH="100%">
                    <CardHeader p="22px 0px 35px 14px">
                        <Flex direction="column">
                            <Text
                                fontSize="lg"
                                color={textColor}
                                fontWeight="bold"
                                pb=".5rem"
                            >
                                Gainz Timeline
                            </Text>
                            <Text
                                fontSize="sm"
                                color="gray.400"
                                fontWeight="normal"
                            >
                                <Text
                                    fontWeight="bold"
                                    as="span"
                                    color="teal.300"
                                >
                                    +30%
                                </Text>{' '}
                                this month.
                            </Text>
                        </Flex>
                    </CardHeader>
                    <CardBody ps="20px" pe="0px" mb="31px" position="relative">
                        <Flex direction="column">
                            {timelineData.map((row, index, arr) => {
                                return (
                                    <TimelineRow
                                        logo={row.logo}
                                        title={row.title}
                                        date={row.date}
                                        color={row.color}
                                        index={index}
                                        arrLength={arr.length}
                                    />
                                )
                            })}
                        </Flex>
                    </CardBody>
                </Card>
            </SimpleGrid>
            <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} spacing="24px">
                <Card p="16px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
                    <CardHeader p="12px 0px 28px 0px">
                        <Flex direction="column" w="100%">
                            <Flex
                                justify="space-between"
                                align="center"
                                minHeight="60px"
                                w="100%"
                            >
                                <Text
                                    fontSize="lg"
                                    color={textColor}
                                    fontWeight="bold"
                                    pb=".5rem"
                                >
                                    Training Splits
                                </Text>
                                <Button
                                    bg={bgButton}
                                    color="white"
                                    fontSize="xs"
                                    variant="no-hover"
                                >
                                    ADD NEW SPLIT
                                </Button>
                            </Flex>
                            <Flex align="center">
                                <Icon
                                    as={IoCheckmarkDoneCircleSharp}
                                    color="teal.300"
                                    w={4}
                                    h={4}
                                    pe="3px"
                                />
                                <Text
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="normal"
                                >
                                    <Text fontWeight="bold" as="span">
                                        3
                                    </Text>{' '}
                                    active splits.
                                </Text>
                            </Flex>
                        </Flex>
                    </CardHeader>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" ps="0px">
                                <Th ps="0px" color="gray.400">
                                    Split Name
                                </Th>

                                <Th color="gray.400">Members</Th>
                                <Th color="gray.400">Workouts</Th>
                                <Th color="gray.400">Weekly Completion</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.splits.map((row) => {
                                return (
                                    <DashboardTableRow
                                        key={row.id}
                                        name={row.name}
                                        logo={null}
                                        members={[]}
                                        budget={null}
                                        progression={null}
                                    />
                                )
                            })}
                        </Tbody>
                    </Table>
                </Card>
            </SimpleGrid>
        </Flex>
    )
}
Index.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
}
