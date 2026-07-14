import type { ReactNode } from 'react'

type Breadcrumb = {
    label: string
    active?: boolean
}

type PageHeaderProps = {
    eyebrow?: Breadcrumb[]
    title: string
    subtitle?: string
    actions?: ReactNode
    variant?: 'compact' | 'display'
}

export default function PageHeader({
    eyebrow,
    title,
    subtitle,
    actions,
    variant = 'compact',
}: PageHeaderProps) {
    if (variant === 'display') {
        return (
            <header className="mb-12">
                {eyebrow && (
                    <div className="flex items-center gap-2 text-on-surface-variant font-label-caps text-label-caps mb-4 uppercase tracking-widest">
                        {eyebrow.map((crumb, i) => (
                            <span key={crumb.label} className="flex items-center gap-2">
                                {i > 0 && <span className="material-symbols-outlined text-[14px]">chevron_right</span>}
                                <span className={crumb.active ? 'text-primary-container font-bold' : ''}>
                                    {crumb.label}
                                </span>
                            </span>
                        ))}
                    </div>
                )}
                <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div>
                        <h1 className="font-display-lg-mobile lg:font-display-lg text-display-lg-mobile lg:text-display-lg text-primary-container">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {actions && <div className="flex items-center gap-4">{actions}</div>}
                </div>
            </header>
        )
    }

    return (
        <header className="h-20 px-margin-desktop flex items-center justify-between border-b border-outline-variant bg-background/90 backdrop-blur-sm sticky top-0 z-30">
            <div>
                <h2 className="font-headline-md text-headline-md text-primary-container">{title}</h2>
                {subtitle && (
                    <p className="font-body-md text-body-md text-on-surface-variant">{subtitle}</p>
                )}
            </div>
            {actions && <div className="flex items-center gap-4">{actions}</div>}
        </header>
    )
}