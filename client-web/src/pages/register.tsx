import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginLayout } from '../components/Layout/LoginLayout'

import { Wrapper } from '../components/Wrapper'
import { useRegisterMutation } from '../generated/graphql'
// import { useRegisterMutation } from '../hooks/useRegister'

interface RegisterFormInputs {
    username: string
    password: string
}

const Register: React.FC = () => {
    const [registerUser] = useRegisterMutation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInputs>()
    const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
        console.log(data)
        await registerUser({ variables: { options: data } })
    }
    return (
        <Wrapper variant="small">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <FormControl isInvalid={!!errors.username}>
                        <FormLabel htmlFor="name">Username</FormLabel>
                        <Input
                            id="username"
                            placeholder="username"
                            {...register('username', {
                                required: 'This is required',
                                minLength: {
                                    value: 4,
                                    message: 'Minimum length should be 4',
                                },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.username && errors.username.message}
                        </FormErrorMessage>
                    </FormControl>
                </Box>
                <Box py={4}>
                    <FormControl isInvalid={!!errors.password}>
                        <FormLabel htmlFor="name">Password</FormLabel>
                        <Input
                            id="password"
                            type="password"
                            placeholder="password"
                            {...register('password', {
                                required: 'This is required',
                                minLength: {
                                    value: 4,
                                    message: 'Minimum length should be 4',
                                },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.password && errors.password.message}
                        </FormErrorMessage>
                    </FormControl>
                </Box>
                <Button
                    mt={4}
                    colorScheme="teal"
                    // isLoading={isSubmitting}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </Wrapper>
    )
}

export default Register
