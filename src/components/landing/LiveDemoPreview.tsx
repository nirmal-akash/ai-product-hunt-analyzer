export default function LiveDemoPreview() {
    return (
        <section className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop mt-12 mb-32">
            <div
                className="border border-outline-variant rounded-xl bg-surface-container-lowest overflow-hidden relative group"
                style={{ boxShadow: '0px 20px 50px rgba(61, 12, 17, 0.08)' }}
            >
                <div className="h-12 border-b border-outline-variant flex items-center px-6 gap-2 bg-background">
                    <div className="w-3 h-3 rounded-full bg-outline-variant" />
                    <div className="w-3 h-3 rounded-full bg-outline-variant" />
                    <div className="w-3 h-3 rounded-full bg-outline-variant" />
                    <div className="ml-4 font-mono-data text-mono-data text-on-surface-variant opacity-60">
                        terminal.sovereign.ai / live-feed
                    </div>
                </div>

                <div className="flex h-[600px] flex-col md:flex-row">
                    <div className="hidden md:flex w-64 border-r border-outline-variant bg-surface-container-lowest p-6 flex-col gap-4">
                        <div className="flex items-center gap-3 text-primary-container font-label-caps bg-surface-container-low p-2 rounded border-l-2 border-secondary">
                            <span className="material-symbols-outlined text-[18px]">insights</span> Intelligence
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant font-label-caps p-2">
                            <span className="material-symbols-outlined text-[18px]">tactic</span> Strategy
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant font-label-caps p-2">
                            <span className="material-symbols-outlined text-[18px]">shield_with_heart</span> Risk
                        </div>
                    </div>

                    <div className="flex-1 p-8 bg-surface-bright flex flex-col gap-6 overflow-y-auto">
                        <div className="flex justify-between items-end border-b border-outline-variant pb-4">
                            <div>
                                <h3 className="font-headline-md text-headline-md text-primary-container">
                                    Velocity Matrix
                                </h3>
                                <p className="font-body-md text-on-surface-variant text-sm mt-1">
                                    Real-time cohort analysis across YC S24
                                </p>
                            </div>
                            <div className="font-mono-data text-mono-data text-secondary hidden sm:block">
                                LIVE UPDATES ACTIVE
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                            <div className="md:col-span-2 border border-outline-variant rounded-lg p-6 bg-surface-container-lowest flex flex-col">
                                <span className="font-label-caps text-on-surface-variant mb-4">Signal Aggregation</span>
                                <div className="flex-1 relative w-full h-full border-b border-l border-outline-variant">
                                    <svg
                                        className="w-full h-full absolute bottom-0 left-0"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 100 100"
                                    >
                                        <path d="M0,80 L20,60 L40,70 L60,30 L80,40 L100,10" fill="none" stroke="#3d0c11" strokeWidth="1.5" />
                                        <path d="M0,90 L20,80 L40,85 L60,50 L80,60 L100,20" fill="none" stroke="#755a31" strokeDasharray="2,2" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>
                            <div className="md:col-span-1 flex flex-col gap-6">
                                <div className="flex-1 border border-outline-variant rounded-lg p-6 bg-surface-container-lowest">
                                    <span className="font-label-caps text-on-surface-variant block mb-2">Confidence Score</span>
                                    <span className="font-display-lg text-display-lg text-primary-container block" style={{ fontSize: 36 }}>
                                        94.2
                                    </span>
                                    <span className="font-mono-data text-mono-data text-secondary-container bg-primary-container px-2 py-1 rounded inline-block mt-2">
                                        +2.4% Δ
                                    </span>
                                </div>
                                <div className="flex-1 border border-outline-variant rounded-lg p-6 bg-surface-container-lowest">
                                    <span className="font-label-caps text-on-surface-variant block mb-4">Recent Anomalies</span>
                                    <ul className="space-y-3 font-mono-data text-xs text-on-surface">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Surge in FinTech mentions
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" /> Unverified backer detected
                                        </li>
                                        <li className="flex items-center gap-2 opacity-50">
                                            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" /> Normal volume baseline
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-background/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                        className="bg-primary-container text-on-primary font-label-caps uppercase px-6 py-3 rounded tracking-widest"
                        style={{ boxShadow: '0px 20px 50px rgba(61, 12, 17, 0.08)' }}
                    >
                        Explore Terminal
                    </button>
                </div>
            </div>
        </section>
    )
}