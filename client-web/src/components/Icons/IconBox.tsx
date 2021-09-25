import React from 'react'
import { Flex } from '@chakra-ui/react'
import { BaseChakraProps } from '../types'

interface Props extends BaseChakraProps {}

export const IconBox: React.FC<Props> = (props) => {
    const { children, ...rest } = props

    return (
        <Flex
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'12px'}
            {...rest}
        >
            {children}
        </Flex>
    )
}
