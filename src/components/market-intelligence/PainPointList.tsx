type PainPoint = {
    icon: string
    title: string
    description: string
    severity: 'Critical' | 'Elevated' | 'Standard'
}

const painPoints: PainPoint[] = [
    {
        icon: 'cable',
        title: 'Legacy System Integration Complexity',
        description:
            'Users report significant resource drain when attempting to unify newer analytical tools with archaic on-premise databases. Mention volume increased by 14% this quarter.',
        severity: 'Critical',
    },
    {
        icon: 'notifications_active',
        title: 'Latency in Threat Alerting',
        description:
            'A consistent gap exists between data ingestion and actionable alerting, causing strategic delays for enterprise-tier clients.',
        severity: 'Elevated',
    },
    {
        icon: 'school',
        title: 'Steep Analytical Learning Curve',
        description:
            'Onboarding junior analysts requires excessive capital allocation due to non-intuitive UX in competitor platforms.',
        severity: 'Standard',
    },
]

const severityStyles: Record<PainPoint['severity'], string> = {
    Critical: 'text-error bg-error-container',
    Elevated: 'text-secondary bg-secondary-container',
    Standard: 'text-on-surface-variant bg-surface-variant',
}

export default function PainPointList() {
    return (
        <section>
            <div className="flex justify-between items-end mb-6">
                <h2 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                    Extracted Friction Points
                </h2>
                <span className="font-mono-data text-[10px] text-on-surface-variant">N=4,281 Signals</span>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-[0px_20px_50px_rgba(61,12,17,0.04)]">
                {painPoints.map((point, i) => (
                    <div
                        key={point.title}
                        className={`flex items-start gap-4 p-6 hover:bg-surface-container-low transition-colors ${i < painPoints.length - 1 ? 'border-b border-surface-variant' : ''
                            }`}
                    >
                        <div className="mt-1">
                            <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'wght' 300" }}>
                                {point.icon}
                            </span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-body-md text-body-md text-primary-container font-semibold mb-1">
                                {point.title}
                            </h4>
                            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{point.description}</p>
                        </div>
                        <div className="hidden sm:block">
                            <span className={`font-mono-data text-mono-data px-2 py-1 rounded text-xs ${severityStyles[point.severity]}`}>
                                {point.severity}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}