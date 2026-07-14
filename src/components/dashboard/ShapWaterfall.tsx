type Bar = {
    label: string
    width: number
    offset: number
    type: 'base' | 'positive' | 'negative' | 'final'
    displayValue: string
}

const bars: Bar[] = [
    { label: 'Base Expectation', width: 60, offset: 0, type: 'base', displayValue: '60.0%' },
    { label: 'Community Engagement', width: 12, offset: 60, type: 'positive', displayValue: '+12.0%' },
    { label: 'Product Quality Score', width: 8, offset: 72, type: 'positive', displayValue: '+8.0%' },
    { label: 'Launch Timing', width: 4, offset: 76, type: 'negative', displayValue: '-4.0%' },
    { label: 'Maker Reputation', width: 11, offset: 76, type: 'positive', displayValue: '+11.0%' },
    { label: 'Final Prediction', width: 87, offset: 0, type: 'final', displayValue: '87.0%' },
]

export default function ShapWaterfall() {
    return (
        <section className="bg-surface-container-lowest border border-outline-variant rounded p-8 hover:border-secondary transition-colors duration-500">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant">
                <h3 className="font-headline-md text-headline-md text-primary-container">
                    Feature Contribution (SHAP Values)
                </h3>
            </div>

            <div className="space-y-4 font-mono-data text-mono-data relative pb-8">
                {bars.map((bar) => {
                    const isFinal = bar.type === 'final'
                    const barColor =
                        bar.type === 'base' ? 'bg-surface-variant border border-outline-variant' :
                            bar.type === 'positive' ? 'bg-primary-container border border-primary shadow-sm' :
                                bar.type === 'negative' ? 'bg-error-container border border-error' :
                                    'bg-secondary border border-secondary-container shadow-sm'

                    const textColor =
                        bar.type === 'negative' ? 'text-error' :
                            bar.type === 'base' ? 'text-on-surface-variant' :
                                'text-primary-container'
                    return (
                        <div
                            key={bar.label}
                            className={`flex items-center gap-4 relative z-10 ${isFinal ? 'mt-6 pt-4 border-t border-outline-variant' : ''}`}
                        >
                            <div className={`w-1/3 text-right truncate pr-4 ${isFinal ? 'font-headline-md text-headline-md text-primary-container' : textColor}`}>
                                {bar.label}
                            </div>
                            <div className="w-2/3 flex items-center">
                                {bar.offset > 0 && <div className="h-6 invisible" style={{ width: `${bar.offset}%` }} />}
                                <div
                                    className={`${isFinal ? 'h-10' : 'h-6'} ${barColor}`}
                                    style={{ width: `${bar.width}%` }}
                                />
                                <span className={`ml-3 ${isFinal ? 'font-display-lg-mobile text-display-lg-mobile text-primary-container' : textColor}`}>
                                    {bar.displayValue}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}