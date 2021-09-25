import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import NavLink from 'next/link'
import { IconBox } from '../Icons/IconBox'

export const SidebarLinks = ({ routes, sidebarVariant, variantChange }) => {
    const router = useRouter()
    // Chakra Color Mode
    let activeBg = useColorModeValue('white', 'gray.700')
    let inactiveBg = useColorModeValue('white', 'gray.700')
    let activeColor = useColorModeValue('gray.700', 'white')
    let inactiveColor = useColorModeValue('gray.400', 'gray.400')
    let sidebarActiveShadow = '0px 7px 11px rgba(0, 0, 0, 0.04)'
    // Here are all the props that may change depending on sidebar's state.(Opaque or transparent)
    if (sidebarVariant === 'opaque') {
        activeBg = 'transparent'
        inactiveBg = useColorModeValue('gray.100', 'gray.600')
        activeColor = useColorModeValue('gray.700', 'white')
        inactiveColor = useColorModeValue('gray.400', 'gray.400')
        sidebarActiveShadow = 'none'
    }

    return (
        routes &&
        routes.map((route, key) => {
            if (route.redirect) {
                return null
            }
            if (route.category) {
                return (
                    <Box key={key}>
                        <Text
                            color={activeColor}
                            fontWeight="bold"
                            mb={{
                                xl: '12px',
                            }}
                            mx="auto"
                            ps={{
                                sm: '10px',
                                xl: '16px',
                            }}
                            py="12px"
                        >
                            {route.name}
                        </Text>
                    </Box>
                )
            }
            const isActiveRoute = router.pathname === route.path
            return (
                <NavLink key={key} href={route.path}>
                    <div>
                        {isActiveRoute ? (
                            <Button
                                boxSize="initial"
                                justifyContent="flex-start"
                                alignItems="center"
                                boxShadow={sidebarActiveShadow}
                                bg={activeBg}
                                transition={variantChange}
                                mb={{
                                    xl: '12px',
                                }}
                                mx={{
                                    xl: 'auto',
                                }}
                                ps={{
                                    sm: '10px',
                                    xl: '16px',
                                }}
                                py="12px"
                                borderRadius="15px"
                                hover="none"
                                w="100%"
                                _active={{
                                    bg: 'inherit',
                                    transform: 'none',
                                    borderColor: 'transparent',
                                }}
                                _focus={{
                                    boxShadow:
                                        '0px 7px 11px rgba(0, 0, 0, 0.04)',
                                }}
                            >
                                <Flex>
                                    {typeof route.icon === 'string' ? (
                                        <Icon>{route.icon}</Icon>
                                    ) : (
                                        <IconBox
                                            bg="teal.300"
                                            color="white"
                                            h="30px"
                                            w="30px"
                                            me="12px"
                                            transition={variantChange}
                                        >
                                            {route.icon}
                                        </IconBox>
                                    )}
                                    <Text
                                        color={activeColor}
                                        my="auto"
                                        fontSize="sm"
                                    >
                                        {route.name}
                                    </Text>
                                </Flex>
                            </Button>
                        ) : (
                            <Button
                                boxSize="initial"
                                justifyContent="flex-start"
                                alignItems="center"
                                bg="transparent"
                                mb={{
                                    xl: '12px',
                                }}
                                mx={{
                                    xl: 'auto',
                                }}
                                py="12px"
                                ps={{
                                    sm: '10px',
                                    xl: '16px',
                                }}
                                borderRadius="15px"
                                hover="none"
                                w="100%"
                                _active={{
                                    bg: 'inherit',
                                    transform: 'none',
                                    borderColor: 'transparent',
                                }}
                                _focus={{
                                    boxShadow: 'none',
                                }}
                            >
                                <Flex>
                                    {typeof route.icon === 'string' ? (
                                        <Icon>{route.icon}</Icon>
                                    ) : (
                                        <IconBox
                                            bg={inactiveBg}
                                            color="teal.300"
                                            h="30px"
                                            w="30px"
                                            me="12px"
                                            transition={variantChange}
                                        >
                                            {route.icon}
                                        </IconBox>
                                    )}
                                    <Text
                                        color={inactiveColor}
                                        my="auto"
                                        fontSize="sm"
                                    >
                                        {route.name}
                                    </Text>
                                </Flex>
                            </Button>
                        )}
                    </div>
                </NavLink>
            )
        })
    )
}
