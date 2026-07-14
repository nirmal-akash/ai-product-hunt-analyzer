import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
    { label: 'Intelligence', icon: 'insights', path: '/dashboard' },
    { label: 'Strategy', icon: 'tactic', path: '/market-intelligence' },
    { label: 'Risk', icon: 'shield_with_heart', path: '/governance' },
    { label: 'Terminal', icon: 'terminal', path: '/history' },
    { label: 'Settings', icon: 'settings', path: '/settings' },
]

export default function MobileNav() {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    return (
        <>
            <div className="lg:hidden sticky top-0 z-50 flex items-center justify-between h-16 px-4 bg-surface-container-lowest border-b border-outline-variant">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary-container text-[16px]">hexagon</span>
                    </div>
                    <span className="font-headline-md text-headline-md text-primary-container" style={{ fontSize: 16 }}>
                        Alpha Terminal
                    </span>
                </div>
                <button
                    onClick={() => setOpen(true)}
                    className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-primary-container"
                    aria-label="Open navigation menu"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>

            {open && (
                <div className="lg:hidden fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
                    <div className="absolute right-0 top-0 h-full w-72 bg-surface-container-lowest border-l border-outline-variant p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Menu</span>
                            <button
                                onClick={() => setOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded text-primary-container"
                                aria-label="Close navigation menu"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <nav className="flex flex-col gap-1">
                            {navItems.map((item) => {
                                const active = location.pathname === item.path
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded transition-all ${active
                                                ? 'text-primary-container bg-surface-container-low border-l-2 border-secondary'
                                                : 'text-on-surface-variant hover:bg-surface-container'
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                        <span className="font-label-caps text-label-caps">{item.label}</span>
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}