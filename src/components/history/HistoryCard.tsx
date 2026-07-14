type HistoryCardProps = {
    productName: string
    date: string
    category: string
    probability: number
    status: 'Analyzed' | 'Processing' | 'Archived'
}

const statusStyles: Record<HistoryCardProps['status'], string> = {
    Analyzed: 'text-primary-container bg-secondary-container',
    Processing: 'text-secondary bg-secondary-container',
    Archived: 'text-on-surface-variant bg-surface-variant',
}

export default function HistoryCard({
    productName,
    date,
    category,
    probability,
    status,
}: HistoryCardProps) {
    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 hover:border-secondary transition-colors duration-300 flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded border border-outline-variant bg-surface flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-container">rocket_launch</span>
                </div>
                <div className="min-w-0">
                    <h3 className="font-headline-md text-headline-md text-primary-container truncate" style={{ fontSize: 18, lineHeight: '24px' }}>
                        {productName}
                    </h3>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">
                        {category} · {date}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-6 shrink-0">
                <div className="text-right">
                    <div className="font-display-lg-mobile text-display-lg-mobile text-primary-container" style={{ fontSize: 24 }}>
                        {probability}%
                    </div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">Probability</span>
                </div>
                <span className={`font-mono-data text-mono-data px-3 py-1 rounded text-xs ${statusStyles[status]}`}>
                    {status}
                </span>
                <button className="w-9 h-9 flex items-center justify-center rounded border border-outline-variant text-primary-container hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
            </div>
        </div>
    )
}