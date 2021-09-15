import './index.css'
import { ApolloProvider } from '@apollo/client'
import { App } from './App'
import { HeaderBar } from './components/header'
import { Layout } from 'antd'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useAuthorizedRoutes } from './useRoutes'
import PerformancePage from './pages/PostsPage'
import React from 'react'
import ReactDOM from 'react-dom'
import client from './common/apollo/client'
import reportWebVitals from './reportWebVitals'

const LayoutStructure = () => {
    const { routes } = useAuthorizedRoutes()
    const { Content, Footer } = Layout
    return (
        <ApolloProvider client={client}>
            <Router>
                <Layout className="layout">
                    <HeaderBar />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <Switch>
                                {routes.map(({ path, component }) => (
                                    <Route
                                        exact
                                        path={path}
                                        component={component}
                                    />
                                ))}
                                {/* <Route exact path="/" component={App} />
                            <Route
                                exact
                                path="/performance"
                                component={PerformancePage}
                            /> */}
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Router>
        </ApolloProvider>
    )
}
ReactDOM.render(
    <React.StrictMode>
        <LayoutStructure />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
