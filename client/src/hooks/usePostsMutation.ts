import { gql, useMutation } from '@apollo/client'

const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            title
            body
        }
    }
`

interface CreatePostInput {
    variables: {
        input: {
            title: string
            body: string
        }
    }
}
// export const usePostsMutation = (): CreatePostsValues => {
//     const [createPost, { data, loading, error }] = useMutation(ADD_POST)

//     return {
//         createPost,
//         data,
//         loading,
//         error,
//     }
// }
export const usePostsMutation = (): ((
    createPostInput: CreatePostInput
) => any) => {
    const [createPost] = useMutation(CREATE_POST, {
        update(cache, { data: { createPost } }) {
            cache.modify({
                fields: {
                    posts(existingPosts = []) {
                        const newPostRef = cache.writeFragment({
                            data: createPost,
                            fragment: gql`
                                fragment NewPost on Post {
                                    id
                                    title
                                    body
                                }
                            `,
                        })
                        return [...existingPosts.data, newPostRef]
                    },
                },
            })
        },
    })
    return createPost
}
