import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../../utils/ErrorFallback'
import { PostsPageContainer } from './PostsPage.container'

const PerformancePage: React.FC = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <PostsPageContainer />
        </ErrorBoundary>
    )
}

export default PerformancePage
