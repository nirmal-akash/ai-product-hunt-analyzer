type Driver = {
    tag: string
    value: string
    title: string
    description: string
    sentiment: 'positive' | 'negative' | 'neutral'
}

const drivers: Driver[] = [
    {
        tag: 'Velocity',
        value: '+12.4%',
        title: 'Pre-launch Waitlist',
        description: 'Conversion rate of early signups exceeds industry benchmark by 2.4x.',
        sentiment: 'positive',
    },
    {
        tag: 'Network',
        value: '+8.1%',
        title: 'Hunter Influence',
        description: 'Selected hunter historically places 75% of products in top 5.',
        sentiment: 'positive',
    },
    {
        tag: 'Timing',
        value: '-4.2%',
        title: 'Day of Week Contention',
        description: 'Tuesday launches face highest historical volume of competitor products.',
        sentiment: 'negative',
    },
    {
        tag: 'Asset',
        value: '-1.1%',
        title: 'Media Quality',
        description: 'Video length slightly exceeds optimal engagement window of 45s.',
        sentiment: 'neutral',
    },
]

export default function KeyDrivers() {
    return (
        <aside className="bg-surface-container-lowest border border-outline-variant rounded h-full flex flex-col">
            <div className="p-6 border-b border-outline-variant flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">tune</span>
                <h3 className="font-headline-md text-headline-md text-primary-container">Key Success Drivers</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {drivers.map((driver, i) => {
                    const dotColor =
                        driver.sentiment === 'positive' ? 'bg-primary-container' :
                            driver.sentiment === 'negative' ? 'bg-error' :
                                'bg-outline'
                    const tagColor =
                        driver.sentiment === 'positive' ? 'text-primary-container' :
                            driver.sentiment === 'negative' ? 'text-error' :
                                'text-on-surface-variant'

                    return (
                        <div key={driver.title}>
                            <div className="group p-4 border border-transparent hover:border-outline-variant hover:bg-surface-container-low transition-all rounded cursor-default">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${dotColor}`} />
                                        <span className={`font-label-caps text-label-caps ${tagColor}`}>{driver.tag}</span>
                                    </div>
                                    <span className={`font-mono-data text-mono-data ${tagColor}`}>{driver.value}</span>
                                </div>
                                <h4 className="font-body-md text-body-md font-medium text-on-background mb-1">
                                    {driver.title}
                                </h4>
                                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                                    {driver.description}
                                </p>
                            </div>
                            {i < drivers.length - 1 && <hr className="border-outline-variant mx-4" />}
                        </div>
                    )
                })}
            </div>

            <div className="p-4 bg-surface-container border-t border-outline-variant mt-auto">
                <div className="flex items-center gap-2 text-primary-container text-sm font-mono-data">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Model Confidence: 94.2%</span>
                </div>
            </div>
        </aside>
    )
}