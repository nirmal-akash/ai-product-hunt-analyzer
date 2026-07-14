type StepperProps = {
    steps: string[]
    currentStep: number
}

export default function Stepper({ steps, currentStep }: StepperProps) {
    return (
        <div className="flex items-center mb-12">
            {steps.map((label, i) => {
                const stepNum = i + 1
                const complete = stepNum < currentStep
                const active = stepNum === currentStep

                return (
                    <div key={label} className="flex items-center flex-1 last:flex-none">
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center font-mono-data text-mono-data border-2 transition-colors ${complete
                                        ? 'bg-primary-container border-primary-container text-on-primary'
                                        : active
                                            ? 'border-primary-container text-primary-container'
                                            : 'border-outline-variant text-on-surface-variant'
                                    }`}
                            >
                                {complete ? (
                                    <span className="material-symbols-outlined text-[18px]">check</span>
                                ) : (
                                    stepNum
                                )}
                            </div>
                            <span
                                className={`font-label-caps text-label-caps uppercase tracking-wider text-center whitespace-nowrap ${active ? 'text-primary-container font-bold' : 'text-on-surface-variant'
                                    }`}
                            >
                                {label}
                            </span>
                        </div>
                        {stepNum < steps.length && (
                            <div
                                className={`flex-1 h-px mx-3 mb-6 transition-colors ${complete ? 'bg-primary-container' : 'bg-outline-variant'
                                    }`}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}