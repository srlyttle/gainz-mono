import React from 'react'
import { Flex } from '@chakra-ui/react'
import { BaseChakraProps } from '../types'

interface Props extends BaseChakraProps {}
export const Separator: React.FC<Props> = ({ variant, children, ...rest }) => {
    return (
        <Flex
            h="1px"
            w="100%"
            bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
            {...rest}
        >
            {children}
        </Flex>
    )
}
