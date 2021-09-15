import { SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'

type Inputs = {
    example: string
    exampleRequired: string
}

export const HookForm: React.FC = () => {
    const { register, handleSubmit, watch, formState } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data)
    const { errors, isValid } = formState
    console.log(watch('exampleRequired')) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register('example')} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register('exampleRequired', { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input disabled={!isValid} type="submit" />
        </form>
    )
}
