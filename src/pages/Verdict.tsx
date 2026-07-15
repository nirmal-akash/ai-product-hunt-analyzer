import { Link } from 'react-router-dom'
import TopBar from '../components/layout/TopBar'

const factors = [
    { name: 'Founder domain expertise', width: 38, impact: '+14', type: 'help' },
    { name: 'ICP clarity (5–40 eng teams)', width: 32, impact: '+11', type: 'help' },
    { name: 'Early revenue ($18.4k MRR)', width: 28, impact: '+9', type: 'help' },
    { name: 'Category timing (OTel wave)', width: 22, impact: '+7', type: 'help' },
    { name: 'Equity / governance hygiene', width: 14, impact: '+4', type: 'help' },
    { name: 'Go-to-market motion', width: 34, impact: '−12', type: 'hurt' },
    { name: 'Differentiation vs Honeycomb / Datadog', width: 26, impact: '−9', type: 'hurt' },
    { name: 'Sales capacity (no dedicated AE)', width: 18, impact: '−6', type: 'hurt' },
]

export default function Verdict() {
    return (
        <>
            <TopBar
                crumb="Verdict"
                actions={<Link className="btn btn-secondary btn-sm" to="/genre-benchmark">Genre Benchmark →</Link>}
            />
            <div className="content content-wide">
                <header className="page-head">
                    <div className="row gap-sm mb-1">
                        <span className="chip chip-brass">Developer tools</span>
                        <span className="chip">Seed · analysed 14 Jul 2026</span>
                    </div>
                    <h1>Verdict for TracePulse</h1>
                    <p>API observability for small engineering teams — measured against developer-tools outcomes, not the whole startup universe.</p>
                </header>

                <div className="grid-2" style={{ alignItems: 'stretch', marginBottom: '1.5rem' }}>
                    <div className="card card-pad-lg">
                        <div className="row" style={{ gap: '1.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div className="score-ring" style={{ ['--p' as any]: 62 }}>
                                <div className="score-ring-inner">
                                    <div className="val">62%</div>
                                    <div className="lbl">Odds</div>
                                </div>
                            </div>
                            <div style={{ flex: 1, minWidth: 180 }}>
                                <p className="eyebrow mb-1">Plain read</p>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                                    Credible path — distribution is the hinge
                                </h3>
                                <p className="small muted" style={{ maxWidth: '36ch' }}>
                                    Product and team score above the developer-tools seed median. Go-to-market and
                                    competitive differentiation pull the odds down. Fix those and this moves into
                                    the top quartile for the genre.
                                </p>
                                <p className="caption mt-2">Model: genre-conditioned · not a guarantee of funding or exit</p>
                            </div>
                        </div>
                    </div>
                    <div className="stack">
                        <div className="stat-tile">
                            <div className="lbl">Genre median (seed)</div>
                            <div className="val">48%</div>
                            <div className="sub">You sit +14 pts above peer baseline</div>
                        </div>
                        <div className="stat-tile">
                            <div className="lbl">Confidence band</div>
                            <div className="val">±9 pts</div>
                            <div className="sub">Moderate data density for this genre</div>
                        </div>
                        <div className="stat-tile">
                            <div className="lbl">Primary risk</div>
                            <div className="val" style={{ fontSize: '1.05rem', fontFamily: 'var(--font-body)', fontWeight: 600, letterSpacing: 0 }}>
                                Go-to-market
                            </div>
                            <div className="sub">See factors below and The Playbook</div>
                        </div>
                    </div>
                </div>

                <div className="card card-pad-lg mb-3">
                    <div className="row-between mb-3">
                        <div>
                            <p className="eyebrow">Feature importance</p>
                            <h2 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>What moved the score</h2>
                        </div>
                        <div className="row gap-sm">
                            <span className="chip chip-success">Helped</span>
                            <span className="chip chip-danger">Hurt</span>
                        </div>
                    </div>
                    <div className="factor-list">
                        {factors.map((f) => (
                            <div className="factor" key={f.name}>
                                <span className="factor-name">{f.name}</span>
                                <div className="factor-bar">
                                    <div className={`fill ${f.type}`} style={{ width: `${f.width}%` }} />
                                </div>
                                <span className={`factor-impact ${f.type}`}>{f.impact}</span>
                            </div>
                        ))}
                    </div>
                    <p className="caption mt-2">Impacts are relative contributions inside the developer-tools model — not absolute probabilities.</p>
                </div>

                <div className="grid-2 mb-3">
                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">In plain language — strengths</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.65rem' }}>
                            You look like the teams that win this category
                        </h3>
                        <p className="small muted" style={{ lineHeight: 1.55 }}>
                            Seed developer-tools companies that clear Series A almost always show: (1) founders
                            who have shipped the problem at scale, (2) a narrow ICP, and (3) some paid usage
                            before a big raise. You have all three. That is why you sit above the genre median.
                        </p>
                    </div>
                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">In plain language — gaps</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.65rem' }}>
                            Buyers still default to the known names
                        </h3>
                        <p className="small muted" style={{ lineHeight: 1.55 }}>
                            Founder-led sales works to ~$20k MRR and then stalls. Peers who broke out either
                            product-led with a sharp free tier wedge or hired one AE who could run a 30-day
                            evaluation. Your positioning still reads as "lighter Datadog," which loses budget fights.
                        </p>
                    </div>
                </div>

                <div className="row-between" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
                    <Link className="btn btn-secondary" to="/new-analysis">Revise inputs</Link>
                    <div className="row gap-sm">
                        <Link className="btn btn-secondary" to="/playbook">Open Playbook</Link>
                        <Link className="btn btn-primary" to="/genre-benchmark">See Genre Benchmark</Link>
                    </div>
                </div>
            </div>
        </>
    )
}