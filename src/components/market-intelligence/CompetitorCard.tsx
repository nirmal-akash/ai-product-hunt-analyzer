type CompetitorCardProps = {
    name: string
    domain: string
    icon: string
    shareOfVoice: string
    sentimentShift: string
    sentimentDirection: 'up' | 'down' | 'flat'
    communityTrust: string
    badge?: string
}

export default function CompetitorCard({
    name,
    domain,
    icon,
    shareOfVoice,
    sentimentShift,
    sentimentDirection,
    communityTrust,
    badge,
}: CompetitorCardProps) {
    const sentimentColor =
        sentimentDirection === 'up' ? 'text-[#059669]' :
            sentimentDirection === 'down' ? 'text-error' :
                'text-on-surface-variant'

    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 hover:border-primary-container transition-colors duration-300 relative overflow-hidden">
            {badge && (
                <div className="absolute top-0 right-0 p-4">
                    <span className="inline-block bg-secondary-container text-on-secondary-container font-label-caps text-[10px] px-2 py-1 rounded-sm uppercase tracking-wider">
                        {badge}
                    </span>
                </div>
            )}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded border border-outline-variant bg-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container">{icon}</span>
                </div>
                <div>
                    <h3 className="font-headline-md text-headline-md text-primary-container" style={{ fontSize: 18, lineHeight: '24px' }}>
                        {name}
                    </h3>
                    <p className="font-label-caps text-label-caps text-on-surface-variant lowercase">{domain}</p>
                </div>
            </div>
            <div className="space-y-4 font-mono-data text-mono-data">
                <div className="flex justify-between items-center border-b border-surface-variant pb-2">
                    <span className="text-on-surface-variant">Share of Voice</span>
                    <span className="text-primary-container font-semibold">{shareOfVoice}</span>
                </div>
                <div className="flex justify-between items-center border-b border-surface-variant pb-2">
                    <span className="text-on-surface-variant">Sentiment Shift</span>
                    <span className={sentimentColor}>{sentimentShift}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Community Trust</span>
                    <span className="text-primary-container font-semibold">{communityTrust}</span>
                </div>
            </div>
        </div>
    )
}