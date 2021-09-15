import { App } from './App'
import loadable from '@loadable/component'

const createPostsPage = () => {
    const LazyComponent = loadable(
        () =>
            import(
                /* webpackChunkName: "PerformancePage" */ './pages/PostsPage'
            ),
        {
            fallback: <div>Loading</div>,
        }
    )

    return () => <LazyComponent />
}

const createAboutPage = () => {
    const LazyComponent = loadable(
        () =>
            import(
                /* webpackChunkName: "PerformancePage" */ './pages/PostsPage'
            ),
        {
            fallback: <div>Loading</div>,
        }
    )

    return () => <LazyComponent />
}
export const path = {
    home: '/',
    posts: '/posts',
    about: 'about/:name',
}
export interface Route {
    component: React.ComponentType
    path: string
}
export const routes: Route[] = [
    {
        component: App,
        path: path.home,
    },
    {
        component: createPostsPage(),
        path: path.posts,
    },
    {
        component: createAboutPage(),
        path: path.about,
    },
]
