import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createSplit: Split;
  deletePost: Scalars['Boolean'];
  deleteSplit: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
  updatePost?: Maybe<Post>;
  updateSplit?: Maybe<Split>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationCreateSplitArgs = {
  name: Scalars['String'];
  workouts: Scalars['Float'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteSplitArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['Float'];
  title: Scalars['String'];
};


export type MutationUpdateSplitArgs = {
  id: Scalars['Float'];
  name: Scalars['String'];
  workouts: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  split?: Maybe<Split>;
  splits: Array<Split>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QuerySplitArgs = {
  id: Scalars['Int'];
};

export type Split = {
  __typename?: 'Split';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  workouts: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', username: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', message: string }>> } };

export type CreateSplitMutationVariables = Exact<{
  workouts: Scalars['Float'];
  name: Scalars['String'];
}>;


export type CreateSplitMutation = { __typename?: 'Mutation', createSplit: { __typename?: 'Split', id: number, name: string } };

export type SplitsQueryVariables = Exact<{ [key: string]: never; }>;


export type SplitsQuery = { __typename?: 'Query', splits: Array<{ __typename?: 'Split', id: number, name: string, workouts: number }> };


export const RegisterDocument = gql`
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
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateSplitDocument = gql`
    mutation createSplit($workouts: Float!, $name: String!) {
  createSplit(workouts: $workouts, name: $name) {
    id
    name
  }
}
    `;
export type CreateSplitMutationFn = Apollo.MutationFunction<CreateSplitMutation, CreateSplitMutationVariables>;

/**
 * __useCreateSplitMutation__
 *
 * To run a mutation, you first call `useCreateSplitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSplitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSplitMutation, { data, loading, error }] = useCreateSplitMutation({
 *   variables: {
 *      workouts: // value for 'workouts'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateSplitMutation(baseOptions?: Apollo.MutationHookOptions<CreateSplitMutation, CreateSplitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSplitMutation, CreateSplitMutationVariables>(CreateSplitDocument, options);
      }
export type CreateSplitMutationHookResult = ReturnType<typeof useCreateSplitMutation>;
export type CreateSplitMutationResult = Apollo.MutationResult<CreateSplitMutation>;
export type CreateSplitMutationOptions = Apollo.BaseMutationOptions<CreateSplitMutation, CreateSplitMutationVariables>;
export const SplitsDocument = gql`
    query splits {
  splits {
    id
    name
    workouts
  }
}
    `;

/**
 * __useSplitsQuery__
 *
 * To run a query within a React component, call `useSplitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSplitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSplitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSplitsQuery(baseOptions?: Apollo.QueryHookOptions<SplitsQuery, SplitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SplitsQuery, SplitsQueryVariables>(SplitsDocument, options);
      }
export function useSplitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SplitsQuery, SplitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SplitsQuery, SplitsQueryVariables>(SplitsDocument, options);
        }
export type SplitsQueryHookResult = ReturnType<typeof useSplitsQuery>;
export type SplitsLazyQueryHookResult = ReturnType<typeof useSplitsLazyQuery>;
export type SplitsQueryResult = Apollo.QueryResult<SplitsQuery, SplitsQueryVariables>;