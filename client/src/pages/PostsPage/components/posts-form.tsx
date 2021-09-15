import { SubmitHandler, useForm } from 'react-hook-form'
import { usePostsMutation } from '../../../hooks/usePostsMutation'
import React from 'react'

interface PostFormInputs {
    title: string
    body: string
}
export const PostsForm: React.FC = () => {
    const createPost = usePostsMutation()
    const { register, handleSubmit } = useForm<PostFormInputs>()
    const onSubmit: SubmitHandler<PostFormInputs> = async (data) => {
        console.log(data)
        await createPost({ variables: { input: data } })
    }
    return (
        <div>
            <h1>Posts form </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Title</label>{' '}
                <input {...register('title')} type="text" name="title" />
                <label htmlFor="body">Body</label>{' '}
                <textarea {...register('body')} name="body" />
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}
