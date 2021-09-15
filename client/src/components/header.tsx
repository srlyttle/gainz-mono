import { Link } from 'react-router-dom'
import React from 'react'

import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

export const HeaderBar: React.FC = () => {
    return (
        <>
            <Layout.Header>
                <Menu onClick={() => null} selectedKeys={[]} mode="horizontal">
                    <Menu.Item key="mail" icon={<MailOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="app" icon={<AppstoreOutlined />}>
                        <Link to="/posts">Posts</Link>
                    </Menu.Item>
                </Menu>
            </Layout.Header>
        </>
    )
}
