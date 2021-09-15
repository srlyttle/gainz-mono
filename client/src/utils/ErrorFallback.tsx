import React from 'react'

interface Props {
    error: Error
    resetErrorBoundary: () => void
}

export const ErrorFallback: React.FC<Props> = ({
    error,
    resetErrorBoundary,
}) => {
    return (
        <div role="alert">
            There was an error
            <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}
