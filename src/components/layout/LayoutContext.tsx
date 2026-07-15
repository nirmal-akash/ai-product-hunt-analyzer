import { createContext, useContext, useState, type ReactNode } from 'react'

type LayoutContextValue = {
    mobileOpen: boolean
    toggleMobile: () => void
    closeMobile: () => void
}

const LayoutContext = createContext<LayoutContextValue | null>(null)

export function LayoutProvider({ children }: { children: ReactNode }) {
    const [mobileOpen, setMobileOpen] = useState(false)
    return (
        <LayoutContext.Provider
            value={{
                mobileOpen,
                toggleMobile: () => setMobileOpen((v) => !v),
                closeMobile: () => setMobileOpen(false),
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}

export function useLayout() {
    const ctx = useContext(LayoutContext)
    if (!ctx) throw new Error('useLayout must be used within LayoutProvider')
    return ctx
}