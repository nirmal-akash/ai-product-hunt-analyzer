import { useState } from 'react'
import Stepper from '../shared/Stepper'

const steps = ['Product Basics', 'Launch Details', 'Assets & Team', 'Review']

type FormData = {
    productName: string
    tagline: string
    category: string
    launchDate: string
    hunter: string
    pricing: string
    videoLength: string
    teamSize: string
    waitlistSize: string
}

const initialData: FormData = {
    productName: '',
    tagline: '',
    category: '',
    launchDate: '',
    hunter: '',
    pricing: '',
    videoLength: '',
    teamSize: '',
    waitlistSize: '',
}

export default function ProductInputWizard() {
    const [step, setStep] = useState(1)
    const [data, setData] = useState<FormData>(initialData)
    const [submitted, setSubmitted] = useState(false)

    const update = (field: keyof FormData, value: string) => {
        setData((prev) => ({ ...prev, [field]: value }))
    }

    const next = () => setStep((s) => Math.min(s + 1, steps.length))
    const back = () => setStep((s) => Math.max(s - 1, 1))

    const inputClass =
        'w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-body-md text-on-background focus:ring-0 focus:border-secondary transition-colors outline-none'
    const labelClass = 'block font-label-caps text-label-caps text-on-surface-variant mb-2'

    if (submitted) {
        return (
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-12 text-center">
                <span className="material-symbols-outlined text-primary-container text-[48px] mb-4 block">
                    check_circle
                </span>
                <h2 className="font-headline-md text-headline-md text-primary-container mb-3">
                    Analysis Queued
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                    {data.productName || 'Your product'} has been submitted for prediction analysis. Results
                    will appear on your Dashboard shortly.
                </p>
            </div>
        )
    }

    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 lg:p-10">
            <Stepper steps={steps} currentStep={step} />

            {step === 1 && (
                <div className="space-y-6 max-w-xl">
                    <div>
                        <label className={labelClass}>Product Name</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="e.g. Nexus Systems"
                            value={data.productName}
                            onChange={(e) => update('productName', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Tagline</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="One sentence describing your product"
                            value={data.tagline}
                            onChange={(e) => update('tagline', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Category</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="e.g. Developer Tools, Fintech, AI"
                            value={data.category}
                            onChange={(e) => update('category', e.target.value)}
                        />
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-6 max-w-xl">
                    <div>
                        <label className={labelClass}>Planned Launch Date</label>
                        <input
                            className={inputClass}
                            type="date"
                            value={data.launchDate}
                            onChange={(e) => update('launchDate', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Hunter (if selected)</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="Hunter username or leave blank"
                            value={data.hunter}
                            onChange={(e) => update('hunter', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Pricing Model</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="e.g. Freemium, $20/mo, Free"
                            value={data.pricing}
                            onChange={(e) => update('pricing', e.target.value)}
                        />
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-6 max-w-xl">
                    <div>
                        <label className={labelClass}>Demo Video Length (seconds)</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="e.g. 45"
                            value={data.videoLength}
                            onChange={(e) => update('videoLength', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Team Size</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="e.g. 3"
                            value={data.teamSize}
                            onChange={(e) => update('teamSize', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Pre-launch Waitlist Size</label>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder="e.g. 1200"
                            value={data.waitlistSize}
                            onChange={(e) => update('waitlistSize', e.target.value)}
                        />
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className="max-w-xl">
                    <h3 className="font-headline-md text-headline-md text-primary-container mb-6">
                        Review Your Submission
                    </h3>
                    <dl className="space-y-3 font-mono-data text-mono-data">
                        {Object.entries(data).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b border-surface-variant pb-2">
                                <dt className="text-on-surface-variant capitalize">
                                    {key.replace(/([A-Z])/g, ' $1')}
                                </dt>
                                <dd className="text-primary-container">{value || '—'}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            )}

            <div className="flex justify-between mt-10 pt-6 border-t border-outline-variant">
                <button
                    onClick={back}
                    disabled={step === 1}
                    className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant hover:text-primary-container transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    Back
                </button>
                {step < steps.length ? (
                    <button
                        onClick={next}
                        className="bg-primary-container text-on-primary font-label-caps uppercase px-6 py-3 rounded tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                        Continue
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                ) : (
                    <button
                        onClick={() => setSubmitted(true)}
                        className="bg-primary-container text-on-primary font-label-caps uppercase px-6 py-3 rounded tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                        Submit for Analysis
                        <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                    </button>
                )}
            </div>
        </div>
    )
}