const timeframes = ['1W', '1M', '1Y']

export default function SentimentTrendChart() {
    return (
        <section className="mb-12 bg-surface-container-lowest border border-outline-variant rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                    Global Sentiment Velocity
                </h2>
                <div className="flex gap-2 font-mono-data text-mono-data text-on-surface-variant text-xs">
                    {timeframes.map((tf) => (
                        <span
                            key={tf}
                            className={
                                tf === '1M'
                                    ? 'px-2 py-1 bg-surface rounded border border-outline-variant text-primary-container font-bold shadow-sm'
                                    : 'px-2 py-1 bg-surface-variant rounded cursor-pointer hover:text-primary-container transition-colors'
                            }
                        >
                            {tf}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative w-full h-64 border-b border-l border-outline-variant border-opacity-50">
                <div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-[10px] font-mono-data text-on-surface-variant py-2">
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                    <span>-50</span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full h-px bg-outline-variant" />
                    <div className="w-full h-px bg-outline-variant" />
                    <div className="w-full h-px bg-outline-variant" />
                    <div className="w-full h-px bg-outline-variant" />
                </div>

                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#3d0c11" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#3d0c11" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,150 C100,140 200,180 300,120 C400,60 500,100 600,80 C700,60 800,40 900,90 C950,115 1000,70 1000,70 L1000,200 L0,200 Z"
                        fill="url(#chartGradient)"
                    />
                    <path
                        d="M0,150 C100,140 200,180 300,120 C400,60 500,100 600,80 C700,60 800,40 900,90 C950,115 1000,70 1000,70"
                        fill="none"
                        stroke="#3d0c11"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                    />
                    <circle cx="300" cy="120" fill="#ffffff" r="4" stroke="#3d0c11" strokeWidth="2" />
                    <circle cx="600" cy="80" fill="#ffffff" r="4" stroke="#3d0c11" strokeWidth="2" />
                    <circle cx="1000" cy="70" fill="#fdd7a4" r="4" stroke="#755a31" strokeWidth="2" />
                </svg>
            </div>

            <div className="flex justify-between mt-3 text-[10px] font-mono-data text-on-surface-variant px-1">
                <span>Oct 01</span>
                <span>Oct 08</span>
                <span>Oct 15</span>
                <span>Oct 22</span>
                <span>Oct 29</span>
            </div>
        </section>
    )
}