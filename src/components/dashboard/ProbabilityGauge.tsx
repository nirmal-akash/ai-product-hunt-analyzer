export default function ProbabilityGauge() {
    const value = 87
    const circumference = 282.74
    const offset = circumference - (circumference * value) / 100

    return (
        <div className="relative w-64 h-64 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                    className="stroke-surface-variant"
                    cx="50" cy="50" fill="none" r="45" strokeWidth="2"
                />
                <circle
                    className="stroke-primary-container transition-all duration-700"
                    cx="50" cy="50" fill="none" r="45"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    strokeWidth="4"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-display-lg text-display-lg text-primary-container leading-none">
                    {value}<span className="text-3xl">%</span>
                </span>
                <span className="font-label-caps text-label-caps text-secondary mt-2">
                    High Confidence
                </span>
            </div>
        </div>
    )
}