type Feature = {
    icon: string
    title: string
    description: string
}

const features: Feature[] = [
    {
        icon: 'query_stats',
        title: 'Prediction Engine',
        description:
            'Algorithmic forecasting utilizing historical cohort data to predict long-term viability beyond initial launch metrics.',
    },
    {
        icon: 'language',
        title: 'Market Intelligence',
        description:
            'Deep-dive contextualization mapping new products against established incumbents and silent disruptors.',
    },
    {
        icon: 'balance',
        title: 'Governance & Compliance',
        description:
            'Automated structural audits identifying potential regulatory friction or cap-table anomalies prior to engagement.',
    },
    {
        icon: 'vital_signs',
        title: 'Sentiment Tracking',
        description:
            'Natural language processing across decentralized channels to distill genuine market reception from manufactured hype.',
    },
]

export default function FeatureGrid() {
    return (
        <section className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop py-24 border-t border-outline-variant">
            <div className="mb-16">
                <h2 className="font-display-lg text-primary-container" style={{ fontSize: 36 }}>
                    Core Architecture
                </h2>
                <p className="font-body-md text-on-surface-variant mt-4 max-w-xl">
                    Built on unyielding principles of data integrity, Sovereign Intelligence provides four
                    distinct pillars of strategic advantage.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="border border-outline-variant p-8 rounded-lg bg-surface-container-lowest hover:border-secondary transition-colors duration-300 group"
                    >
                        <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-6 text-primary-container group-hover:bg-secondary-container transition-colors">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                                {f.icon}
                            </span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-primary-container mb-3">{f.title}</h3>
                        <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">{f.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}