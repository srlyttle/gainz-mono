import { PostsForm } from './components/posts-form'
import { PostsList } from './components/posts-list'
import { useGetPosts } from '../../hooks/usePostsQuery'
import React from 'react'

export const PostsPageView: React.FC = ({}) => {
    const { data, loading } = useGetPosts()
    console.log(data)
    if (!data || loading) {
        return <div>loading ...</div>
    }
    return (
        <>
            <h1>Posts </h1>
            <div>
                <PostsForm />
            </div>
            <div>
                <PostsList posts={data} />
            </div>
        </>
    )
}
