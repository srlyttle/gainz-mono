import { Route } from './routes'
import { routes } from './routes'
import React from 'react'

interface RouteData {
    routes: Route[]
}
export const useAuthorizedRoutes = (): RouteData => {
    const memoizedRoutes = React.useMemo(() => routes, [])
    return {
        routes: memoizedRoutes,
    }
}
