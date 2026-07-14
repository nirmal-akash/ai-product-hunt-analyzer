export default function EquityCalculator() {
    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 lg:p-8 hover:border-secondary-fixed-dim transition-colors duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none" />

            <div className="flex justify-between items-end border-b border-outline-variant pb-4 mb-6 relative z-10">
                <h2 className="font-headline-md text-headline-md text-primary-container">Equity Calculator</h2>
                <span className="material-symbols-outlined text-secondary">calculate</span>
            </div>

            <div className="space-y-5 relative z-10">
                <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                        Valuation Cap (USD)
                    </label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-mono-data text-primary-container focus:ring-0 focus:border-secondary transition-colors outline-none"
                        readOnly
                        type="text"
                        defaultValue="25,000,000"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                            Discount Rate
                        </label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-mono-data text-primary-container focus:ring-0 focus:border-secondary transition-colors outline-none"
                            type="text"
                            defaultValue="20%"
                        />
                    </div>
                    <div>
                        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                            Investment
                        </label>
                        <input
                            className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-mono-data text-primary-container focus:ring-0 focus:border-secondary transition-colors outline-none"
                            type="text"
                            defaultValue="$500,000"
                        />
                    </div>
                </div>

                <div className="pt-6 mt-6 border-t border-outline-variant">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-label-caps text-label-caps text-on-surface-variant">Projected Equity</span>
                        <span className="font-display-lg-mobile text-display-lg-mobile text-primary-container">2.45%</span>
                    </div>
                    <div className="w-full h-[2px] bg-outline-variant rounded-full overflow-hidden mt-4">
                        <div className="h-full bg-secondary w-[2.45%]" />
                    </div>
                </div>

                <button
                    type="button"
                    className="w-full mt-6 bg-primary-container text-on-primary rounded py-3 font-label-caps text-label-caps uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                    Generate Term Sheet
                </button>
            </div>
        </div>
    )
}