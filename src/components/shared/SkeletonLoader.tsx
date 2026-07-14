import type { CSSProperties } from 'react'

type SkeletonProps = {
    className?: string
    style?: CSSProperties
}

export function Skeleton({ className = '', style }: SkeletonProps) {
    return <div className={`animate-pulse bg-surface-variant rounded ${className}`} style={style} />
}

export function DashboardSkeleton() {
    return (
        <div className="flex-1 p-margin-desktop overflow-y-auto">
            <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
                <div className="md:col-span-8 space-y-gutter">
                    {/* Gauge card skeleton */}
                    <section className="bg-surface-container-lowest border border-outline-variant rounded p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1 space-y-4 w-full">
                                <Skeleton className="h-3 w-32" />
                                <Skeleton className="h-10 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                            <Skeleton className="w-64 h-64 rounded-full shrink-0" />
                        </div>
                    </section>

                    {/* Waterfall skeleton */}
                    <section className="bg-surface-container-lowest border border-outline-variant rounded p-8">
                        <Skeleton className="h-6 w-64 mb-8" />
                        <div className="space-y-4">
                            {[60, 45, 35, 25, 40, 87].map((w, i) => (
                                <Skeleton key={i} style={{ width: `${w}%` }} className="h-6" />
                            ))}
                        </div>
                    </section>
                </div>

                {/* Drivers skeleton */}
                <div className="md:col-span-4">
                    <div className="bg-surface-container-lowest border border-outline-variant rounded h-full p-6 space-y-4">
                        <Skeleton className="h-6 w-48" />
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-2 py-2">
                                <Skeleton className="h-3 w-20" />
                                <Skeleton className="h-4 w-40" />
                                <Skeleton className="h-3 w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export function MarketIntelligenceSkeleton() {
    return (
        <div className="p-margin-mobile md:p-margin-desktop w-full max-w-container-max mx-auto">
            <Skeleton className="h-3 w-40 mb-4" />
            <Skeleton className="h-10 w-96 mb-4" />
            <Skeleton className="h-4 w-full max-w-2xl mb-2" />
            <Skeleton className="h-4 w-3/4 max-w-2xl mb-12" />

            <div className="mb-12 bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
                <Skeleton className="h-4 w-56 mb-6" />
                <Skeleton className="h-64 w-full" />
            </div>

            <div className="mb-12">
                <Skeleton className="h-4 w-40 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 space-y-4">
                            <div className="flex items-center gap-4">
                                <Skeleton className="w-12 h-12" />
                                <div className="space-y-2 flex-1">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-3 w-20" />
                                </div>
                            </div>
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Skeleton className="h-4 w-48 mb-6" />
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 space-y-6">
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-16 w-full" />
                    ))}
                </div>
            </div>
        </div>
    )
}
export function GovernanceSkeleton() {
    return (
        <div className="p-margin-mobile lg:p-margin-desktop w-full max-w-container-max mx-auto">
            <Skeleton className="h-3 w-48 mb-4" />
            <Skeleton className="h-10 w-96 mb-4" />
            <Skeleton className="h-4 w-full max-w-2xl mb-2" />
            <Skeleton className="h-4 w-3/4 max-w-2xl mb-8" />

            <div className="flex gap-8 mb-8 border-b border-outline-variant pb-4">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-40" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter">
                <div className="xl:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-lg p-6 space-y-6">
                    <Skeleton className="h-6 w-40 mb-4" />
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-16 w-full" />
                    ))}
                </div>
                <div className="xl:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-lg p-6 space-y-6">
                    <Skeleton className="h-6 w-48 mb-4" />
                    <Skeleton className="h-10 w-full" />
                    <div className="grid grid-cols-2 gap-4">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                    <Skeleton className="h-12 w-full" />
                </div>
            </div>
        </div>
    )
}