import type { ReactNode } from 'react'
import { useLayout } from './LayoutContext'

type TopBarProps = {
    crumb: string
    actions?: ReactNode
}

export default function TopBar({ crumb, actions }: TopBarProps) {
    const { toggleMobile } = useLayout()
    return (
        <header className="topbar">
            <div className="topbar-left">
                <button className="menu-btn" type="button" aria-label="Open menu" onClick={toggleMobile}>
                    <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
                </button>
                <div className="topbar-crumb">
                    <span className="faint">TracePulse</span>
                    <span className="faint">/</span>
                    <strong>{crumb}</strong>
                </div>
            </div>
            <div className="topbar-right">{actions}</div>
        </header>
    )
}