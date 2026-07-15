import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { LayoutProvider, useLayout } from './LayoutContext'

function ShellInner() {
    const { mobileOpen, closeMobile } = useLayout()
    return (
        <>
            <div className={`sidebar-backdrop${mobileOpen ? ' open' : ''}`} onClick={closeMobile} />
            <div className="app">
                <Sidebar />
                <div className="main">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default function AppShell() {
    return (
        <LayoutProvider>
            <ShellInner />
        </LayoutProvider>
    )
}