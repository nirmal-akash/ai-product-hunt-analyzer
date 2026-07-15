import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import TopBar from '../components/layout/TopBar'

const stepLabels = ['The idea', 'Team & stage', 'Market & traction', 'Review']

const genreOptions = [
    { value: 'devtools', label: 'Developer tools' },
    { value: 'fintech', label: 'Fintech' },
    { value: 'healthtech', label: 'Healthtech' },
    { value: 'saas', label: 'B2B SaaS (horizontal)' },
    { value: 'consumer', label: 'Consumer' },
    { value: 'climate', label: 'Climate / energy' },
]

export default function Wizard() {
    const navigate = useNavigate()
    const [step, setStep] = useState(0)

    const [productName, setProductName] = useState('TracePulse')
    const [oneLiner, setOneLiner] = useState('API observability for small engineering teams')
    const [genre, setGenre] = useState('devtools')
    const [problem, setProblem] = useState('Debugging production APIs is slow')
    const [detail, setDetail] = useState(
        "A lightweight tracing and error-correlation layer for REST and GraphQL services. Built for teams of 5–40 engineers who outgrew logs but don't need an enterprise APM suite."
    )

    const [stage, setStage] = useState('Seed')
    const [teamSize, setTeamSize] = useState('4–8')
    const [founderBg, setFounderBg] = useState('Domain expert (ex-FAANG / infra)')
    const [equity, setEquity] = useState('Documented split + vesting')
    const [moat, setMoat] = useState(
        'Two co-founders shipped observability at scale; open-source tracing contributions; warm intros into 40 seed-stage eng leads.'
    )

    const [icp, setIcp] = useState('Seed–Series A SaaS with 5–40 engineers')
    const [pricing, setPricing] = useState('Usage-based + seat floor')
    const [mrr, setMrr] = useState('18,400')
    const [growth, setGrowth] = useState('5–15%')
    const [gtm, setGtm] = useState('Mostly founder-led sales and developer content. No dedicated AE. Product-led free tier in beta.')
    const [competitors, setCompetitors] = useState('Datadog APM lite, Honeycomb, self-hosted OpenTelemetry')

    const genreLabel = genreOptions.find((g) => g.value === genre)?.label ?? genre

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1)
        } else {
            navigate('/verdict')
        }
    }
    const handleBack = () => {
        if (step > 0) setStep(step - 1)
    }

    return (
        <>
            <TopBar crumb="New Analysis" actions={<Link className="btn btn-ghost btn-sm" to="/history">Cancel</Link>} />
            <div className="content">
                <header className="page-head">
                    <p className="eyebrow">Step-by-step</p>
                    <h1>Describe what you're building</h1>
                    <p>We'll map your idea against developer-tools peers. Honest detail beats polished pitch copy.</p>
                </header>

                <div className="steps" role="tablist">
                    {stepLabels.map((label, i) => (
                        <button
                            key={label}
                            type="button"
                            className={`step${i === step ? ' active' : ''}${i < step ? ' done' : ''}`}
                            role="tab"
                            aria-selected={i === step}
                            onClick={() => setStep(i)}
                        >
                            <span className="step-num">{String(i + 1).padStart(2, '0')}</span> {label}
                        </button>
                    ))}
                </div>

                <form
                    className="card card-pad-lg"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleNext()
                    }}
                >
                    {step === 0 && (
                        <div className="stack">
                            <div className="field">
                                <label htmlFor="productName">Product name</label>
                                <input className="field-input" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                            </div>
                            <div className="field">
                                <label htmlFor="oneLiner">One-line description</label>
                                <input className="field-input" id="oneLiner" value={oneLiner} onChange={(e) => setOneLiner(e.target.value)} required />
                                <span className="hint">What a peer founder would say in one breath.</span>
                            </div>
                            <div className="grid-2">
                                <div className="field">
                                    <label htmlFor="genre">Genre / category</label>
                                    <select className="field-select" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                                        {genreOptions.map((g) => (
                                            <option key={g.value} value={g.value}>{g.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="problem">Primary problem</label>
                                    <select className="field-select" id="problem" value={problem} onChange={(e) => setProblem(e.target.value)}>
                                        <option>Debugging production APIs is slow</option>
                                        <option>Cost of observability tools</option>
                                        <option>Alert fatigue</option>
                                        <option>Onboarding junior engineers</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="detail">What are you building, in plain terms?</label>
                                <textarea className="field-textarea" id="detail" rows={4} value={detail} onChange={(e) => setDetail(e.target.value)} />
                            </div>
                        </div>
                    )}

                    {step === 1 && (
                        <div className="stack">
                            <div className="grid-2">
                                <div className="field">
                                    <label htmlFor="stage">Company stage</label>
                                    <select className="field-select" id="stage" value={stage} onChange={(e) => setStage(e.target.value)}>
                                        <option>Pre-seed / idea</option>
                                        <option>Seed</option>
                                        <option>Series A</option>
                                        <option>Series B+</option>
                                        <option>Bootstrapped / profitable</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="teamSize">Team size</label>
                                    <select className="field-select" id="teamSize" value={teamSize} onChange={(e) => setTeamSize(e.target.value)}>
                                        <option>Solo founder</option>
                                        <option>2–3</option>
                                        <option>4–8</option>
                                        <option>9–20</option>
                                        <option>21+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid-2">
                                <div className="field">
                                    <label htmlFor="founderBg">Founder background</label>
                                    <select className="field-select" id="founderBg" value={founderBg} onChange={(e) => setFounderBg(e.target.value)}>
                                        <option>Domain expert (ex-FAANG / infra)</option>
                                        <option>Repeat founder</option>
                                        <option>First-time, technical</option>
                                        <option>First-time, commercial</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="equity">Founder equity clarity</label>
                                    <select className="field-select" id="equity" value={equity} onChange={(e) => setEquity(e.target.value)}>
                                        <option>Documented split + vesting</option>
                                        <option>Handshake only</option>
                                        <option>Solo founder</option>
                                        <option>Disputed / unclear</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="moat">Why you, specifically?</label>
                                <textarea className="field-textarea" id="moat" rows={3} value={moat} onChange={(e) => setMoat(e.target.value)} />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="stack">
                            <div className="grid-2">
                                <div className="field">
                                    <label htmlFor="icp">Ideal customer</label>
                                    <input className="field-input" id="icp" value={icp} onChange={(e) => setIcp(e.target.value)} />
                                </div>
                                <div className="field">
                                    <label htmlFor="pricing">Pricing model</label>
                                    <select className="field-select" id="pricing" value={pricing} onChange={(e) => setPricing(e.target.value)}>
                                        <option>Usage-based + seat floor</option>
                                        <option>Per-seat SaaS</option>
                                        <option>Enterprise contract</option>
                                        <option>Open-core</option>
                                        <option>Not decided</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid-2">
                                <div className="field">
                                    <label htmlFor="mrr">Current MRR (USD)</label>
                                    <input className="field-input mono" id="mrr" value={mrr} onChange={(e) => setMrr(e.target.value)} />
                                    <span className="hint">Enter 0 if pre-revenue. Labelled estimate is fine.</span>
                                </div>
                                <div className="field">
                                    <label htmlFor="growth">MoM growth (approx.)</label>
                                    <select className="field-select" id="growth" value={growth} onChange={(e) => setGrowth(e.target.value)}>
                                        <option>&lt; 5%</option>
                                        <option>5–15%</option>
                                        <option>15–30%</option>
                                        <option>&gt; 30%</option>
                                        <option>Pre-revenue</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="gtm">How do customers find you today?</label>
                                <textarea className="field-textarea" id="gtm" rows={3} value={gtm} onChange={(e) => setGtm(e.target.value)} />
                            </div>
                            <div className="field">
                                <label htmlFor="competitors">Main alternatives customers consider</label>
                                <input className="field-input" id="competitors" value={competitors} onChange={(e) => setCompetitors(e.target.value)} />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <p className="eyebrow mb-2">Review before submit</p>
                            <div className="card-inset card-pad stack-sm">
                                <div className="row-between">
                                    <span className="muted small">Product</span>
                                    <strong>{productName || '—'}</strong>
                                </div>
                                <div className="row-between">
                                    <span className="muted small">Category</span>
                                    <strong>{genreLabel}</strong>
                                </div>
                                <div className="row-between">
                                    <span className="muted small">Stage</span>
                                    <strong>{stage} · {teamSize} people</strong>
                                </div>
                                <div className="row-between">
                                    <span className="muted small">Traction</span>
                                    <strong className="mono">${mrr || '0'} MRR · {growth} MoM</strong>
                                </div>
                            </div>
                            <p className="small muted mt-2">
                                You'll receive a Verdict with feature importance, a Genre Benchmark against
                                developer-tools peers, and a Playbook of next actions.
                            </p>
                        </div>
                    )}

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={handleBack} disabled={step === 0}>
                            Back
                        </button>
                        <div className="row gap-sm">
                            <span className="caption">Step {step + 1} of 4</span>
                            <button type="submit" className="btn btn-primary">
                                {step === 3 ? 'Run analysis' : 'Continue'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}