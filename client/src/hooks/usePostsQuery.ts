import { gql, useQuery } from '@apollo/client'

const GET_POSTS = gql`
    query getPostsLimitTo10($options: PageQueryOptions!) {
        posts(options: $options) {
            data {
                id
                title
            }
        }
    }
`

export const useGetPosts = () => {
    const { data, loading } = useQuery(GET_POSTS, {
        variables: {
            options: {
                paginate: {
                    page: 1,
                    limit: 2,
                },
            },
        },
    })

    return { data: data?.posts?.data, loading }
}
