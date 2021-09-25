import { Portal, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    PersonIcon,
    DocumentIcon,
    RocketIcon,
    HomeIcon,
    StatsIcon,
} from '../../components/Icons/Icons'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { MainPanel } from '../../components/Layout/MainPanel'
import { AdminNavbar } from '../../components/Navbars/AdminNavbar'
import { PanelContent } from '../../components/Layout/PanelContent'
import { PanelContainer } from '../../components/Layout/PanelContainer'
import { DashboardView } from '../../views/Dashboard/Dashboard'
import { AuthNavbar } from '../Navbars/AuthNavbar'

export const DashboardLayout: React.FC = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [fixed, setFixed] = React.useState(false)

    return (
        <div>
            <Sidebar
                routes={[
                    {
                        path: '/',
                        name: 'Home',
                        rtlName: 'لوحة القيادة',
                        icon: <HomeIcon color="inherit" />,
                        // component: Tables,
                        layout: '/admin',
                    },
                    {
                        path: '/dashboard',
                        name: 'Statistics',
                        icon: <StatsIcon color="inherit" />,

                        // component: Dashboard,
                        layout: '/admin',
                    },
                    {
                        path: '/profile',
                        name: 'Profile',
                        icon: <PersonIcon color="inherit" />,

                        // component: Dashboard,
                        layout: '/admin',
                    },

                    // {
                    //     path: '/register',
                    //     name: 'Sign Up',
                    //     rtlName: 'لوحة القيادة',
                    //     icon: <RocketIcon color="inherit" />,
                    //     secondaryNavbar: true,
                    //     // component: SignUp,
                    //     layout: '/auth',
                    // },
                ]}
                logoText={'Gainz Dashboard'}
                display="none"
                sidebarVariant={'transparent'}
            />
            <MainPanel
                w={{
                    base: '100%',
                    xl: 'calc(100% - 275px)',
                }}
            >
                <Portal>
                    <AdminNavbar
                        onOpen={onOpen}
                        brandText={''}
                        secondary={false}
                        fixed={fixed}
                        // {...rest}
                    />
                    {/* <AuthNavbar
                        secondary={false}
                        logoText="PURITY UI DASHBOARD"
                    /> */}
                </Portal>

                <PanelContent>
                    <PanelContainer>{children}</PanelContainer>
                </PanelContent>
            </MainPanel>
        </div>
    )
}
