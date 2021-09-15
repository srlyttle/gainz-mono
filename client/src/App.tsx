import React from 'react'

import './App.css'
import { Accordian } from './components/accordian'
import { useGetPosts } from './hooks/usePostsQuery'

// import PerformancePage from './pages/PerformancePage'

export const App: React.FC = () => {
    const result = useGetPosts()
    console.log(result)
    return (
        <div className="App">
            <Accordian title="test" />
        </div>
    )
}
