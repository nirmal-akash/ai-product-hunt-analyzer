import { Link, useLocation } from 'react-router-dom'

const navItems = [
    { label: 'Intelligence', icon: 'insights', path: '/dashboard' },
    { label: 'Strategy', icon: 'tactic', path: '/market-intelligence' },
    { label: 'Risk', icon: 'shield_with_heart', path: '/governance' },
    { label: 'Terminal', icon: 'terminal', path: '/history' },
    { label: 'Settings', icon: 'settings', path: '/settings' },
]

export default function Sidebar() {
    const location = useLocation()

    return (
        <nav className="hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-12 pb-8 w-64 bg-surface-container-lowest border-r border-outline-variant z-40">
            <div className="px-6 mb-12 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">hexagon</span>
                </div>
                <div className="min-w-0">
                    <h1 className="font-headline-md text-headline-md text-primary-container truncate">Alpha Terminal</h1>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">V3.4 Analytical Hub</p>
                </div>
            </div>

            <ul className="flex-1 px-4 space-y-1">
                {navItems.map((item) => {
                    const active = location.pathname === item.path
                    return (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded transition-all ${active
                                    ? 'text-primary border-r-2 border-secondary bg-surface-container-low translate-x-1'
                                    : 'text-on-surface-variant hover:bg-surface-container'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-[20px] ${active ? 'fill' : ''}`}>
                                    {item.icon}
                                </span>
                                <span className="font-label-caps text-label-caps">{item.label}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <div className="px-6 mt-auto space-y-6">
                <button className="w-full py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded hover:bg-secondary transition-colors border border-outline-variant">
                    Pro Upgrade
                </button>
                <ul className="space-y-3 border-t border-outline-variant pt-6">
                    <li>
                        <a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined text-[16px]">help_outline</span>
                            <span className="font-label-caps text-label-caps">Help</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined text-[16px]">gavel</span>
                            <span className="font-label-caps text-label-caps">Compliance</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}