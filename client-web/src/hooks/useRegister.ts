import { gql, useMutation } from '@apollo/client'

interface UsernamePasswordInput {
    variables: {
        options: {
            username: string
            password: string
        }
    }
}
const REGISTER = gql`
    mutation Register($options: UsernamePasswordInput!) {
        register(options: $options) {
            user {
                username
            }
            errors {
                message
            }
        }
    }
`

export const useRegisterMutation = (): ((
    registerInput: UsernamePasswordInput,
) => any) => {
    const [register] = useMutation(REGISTER)
    return register
}
