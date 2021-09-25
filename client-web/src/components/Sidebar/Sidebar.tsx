/*eslint-disable*/
// import { HamburgerIcon } from '@chakra-ui/icons'
// chakra imports
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    // Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import ImageLogo from '../../assets/img/gainz-logo-temp.png'
import { Separator } from '../Separator/Separator'
import React from 'react'
import { SidebarLinks } from './SidebarLinks'

export const Sidebar = (props) => {
    const mainPanel = React.useRef()
    let activeBg = useColorModeValue('white', 'gray.700')
    let variantChange = '0.2s linear'

    const { logoText, routes, sidebarVariant } = props

    //  BRAND
    //  Chakra Color Mode
    const mainText = useColorModeValue('gray.700', 'gray.200')
    let sidebarBg = 'none'
    let sidebarRadius = '0px'
    let sidebarMargins = '0px'
    if (sidebarVariant === 'opaque') {
        sidebarBg = useColorModeValue('white', 'gray.700')
        sidebarRadius = '16px'
        sidebarMargins = '16px 0px 16px 16px'
    }
    const sidebarLogo = (
        <Box pt={'25px'} mb="12px" backgroundColor={activeBg}>
            <Link
                href={`${process.env.PUBLIC_URL}/#/`}
                target="_blank"
                display="flex"
                lineHeight="100%"
                mb="30px"
                fontWeight="bold"
                justifyContent="center"
                alignItems="center"
                fontSize="11px"
            >
                {/* <Image src={ImageLogo} /> */}
            </Link>
            <Separator></Separator>
        </Box>
    )

    return (
        <Box ref={mainPanel}>
            <Box display={{ sm: 'none', xl: 'block' }} position="fixed">
                <Box
                    bg={sidebarBg}
                    transition={variantChange}
                    w="260px"
                    maxW="260px"
                    ms={{
                        sm: '16px',
                    }}
                    my={{
                        sm: '16px',
                    }}
                    h="calc(100vh - 32px)"
                    ps="20px"
                    pe="20px"
                    m={sidebarMargins}
                    borderRadius={sidebarRadius}
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        fontSize="11px"
                    >
                        {sidebarLogo}
                    </Box>
                    <Stack direction="column" mb="40px">
                        <Box>
                            <SidebarLinks
                                variantChange={variantChange}
                                routes={routes}
                                sidebarVariant={sidebarVariant}
                            />
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
