import { Link } from 'react-router-dom'
import TopBar from '../components/layout/TopBar'

const sparkHeights = [40, 48, 55, 50, 62, 70, 58, 52, 48, 45, 42, 44]

const peers = [
    { name: 'TracePulse', you: true, stage: 'Seed', angle: 'API tracing for small teams', outcome: '$18k MRR', outcomeType: 'mono' },
    { name: 'Peer A (anonymised)', stage: 'Seed', angle: 'Error budgets + SLOs only', outcome: 'Raised A', outcomeType: 'success' },
    { name: 'Peer B', stage: 'Seed', angle: 'Full APM clone, lower price', outcome: 'Stalled', outcomeType: 'danger' },
    { name: 'Peer C', stage: 'Series A', angle: 'OTel pipeline as product', outcome: 'Strong NRR', outcomeType: 'success' },
    { name: 'Peer D', stage: 'Pre-seed', angle: 'AI root-cause assistant', outcome: 'Crowded', outcomeType: 'warn' },
]

const friction = [
    { num: '01', title: 'Incumbent free tiers', body: 'Buyers start on Datadog free or self-hosted OTel and only switch when pain is acute — your wedge must be time-to-value under a day.' },
    { num: '02', title: 'Security review lag', body: 'Even seed SaaS customers run SOC2 questionnaires. Without a one-pager and DPA ready, cycles stretch past 30 days.' },
    { num: '03', title: '"Not another dashboard"', body: 'Engineers resist tools that add UI without removing toil. Position around fewer pages, not more charts.' },
]

export default function MarketIntelligence() {
    return (
        <>
            <TopBar
                crumb="Genre Benchmark"
                actions={<Link className="btn btn-secondary btn-sm" to="/playbook">The Playbook →</Link>}
            />
            <div className="content content-wide">
                <header className="page-head">
                    <p className="eyebrow">Developer tools · seed cohort</p>
                    <h1>How TracePulse sits among peers</h1>
                    <p>Success isn't universal. These comparisons use only startups in API tooling, observability, and adjacent developer infrastructure.</p>
                </header>

                <div className="grid-4 mb-3">
                    <div className="stat-tile">
                        <div className="lbl">Peer set</div>
                        <div className="val">47</div>
                        <div className="sub">Seed-stage genre matches</div>
                    </div>
                    <div className="stat-tile">
                        <div className="lbl">Your MRR rank</div>
                        <div className="val">P62</div>
                        <div className="sub">Above median for seed devtools</div>
                    </div>
                    <div className="stat-tile">
                        <div className="lbl">Category sentiment</div>
                        <div className="val">Cautious</div>
                        <div className="sub" style={{ fontFamily: 'var(--font-body)' }}>Buyer fatigue with "another APM"</div>
                    </div>
                    <div className="stat-tile">
                        <div className="lbl">Friction index</div>
                        <div className="val">High</div>
                        <div className="sub">Eval cycles 21–45 days typical</div>
                    </div>
                </div>

                <div className="grid-2 mb-3">
                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">Sentiment trend · 18 months</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                            What buyers and investors are saying
                        </h3>
                        <div className="spark mb-2" aria-hidden="true">
                            {sparkHeights.map((h, i) => (
                                <span key={i} style={{ height: `${h}%` }} className={h === 70 ? 'hi' : ''} />
                            ))}
                        </div>
                        <p className="small muted" style={{ lineHeight: 1.5 }}>
                            Interest in OpenTelemetry-native tools peaked mid-cohort, then cooled as budgets
                            consolidated into two or three vendors. Winners now emphasise cost control and
                            time-to-first-insight for small teams — not feature parity with enterprise suites.
                        </p>
                        <div className="row gap-sm mt-2">
                            <span className="chip chip-warn">Budget scrutiny</span>
                            <span className="chip">OTel standardisation</span>
                            <span className="chip chip-success">SMB wedge open</span>
                        </div>
                    </div>

                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">Competitive positioning</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                            Breadth vs. focus
                        </h3>
                        <div className="pos-map">
                            <div className="cross-h" />
                            <div className="cross-v" />
                            <span className="axis-x">Niche focus → Platform breadth</span>
                            <span className="axis-y">Price accessibility → Enterprise</span>
                            <div className="pos-dot" style={{ left: '72%', top: '28%' }}><span className="tip">Datadog</span></div>
                            <div className="pos-dot" style={{ left: '58%', top: '38%' }}><span className="tip">New Relic</span></div>
                            <div className="pos-dot" style={{ left: '48%', top: '52%' }}><span className="tip">Honeycomb</span></div>
                            <div className="pos-dot" style={{ left: '35%', top: '62%' }}><span className="tip">Self-host OTel</span></div>
                            <div className="pos-dot you" style={{ left: '28%', top: '58%' }}><span className="tip">You</span></div>
                        </div>
                        <p className="small muted mt-2">
                            You occupy the affordable, focused quadrant — correct for the ICP, but easy to
                            overlook in RFPs that default to known brands.
                        </p>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="card-pad" style={{ borderBottom: '1px solid var(--border)' }}>
                        <p className="eyebrow">Peer snapshots</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginTop: '0.25rem' }}>
                            Nearby companies in the same genre
                        </h3>
                    </div>
                    <div className="table-wrap">
                        <table className="data">
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Stage</th>
                                    <th>Angle</th>
                                    <th>Outcome signal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {peers.map((p) => (
                                    <tr key={p.name}>
                                        <td>
                                            <strong>{p.name}</strong>
                                            {p.you && <span className="chip chip-brass" style={{ marginLeft: '0.35rem' }}>You</span>}
                                        </td>
                                        <td>{p.stage}</td>
                                        <td>{p.angle}</td>
                                        <td>
                                            {p.outcomeType === 'mono' && <span className="mono">{p.outcome}</span>}
                                            {p.outcomeType === 'success' && <span className="chip chip-success">{p.outcome}</span>}
                                            {p.outcomeType === 'danger' && <span className="chip chip-danger">{p.outcome}</span>}
                                            {p.outcomeType === 'warn' && <span className="chip chip-warn">{p.outcome}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card card-pad-lg mb-3">
                    <p className="eyebrow mb-1">Market friction points</p>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What slows deals in this genre</h2>
                    <div className="stack-sm">
                        {friction.map((f) => (
                            <div className="row" style={{ alignItems: 'flex-start', gap: '0.85rem' }} key={f.num}>
                                <span className="chip">{f.num}</span>
                                <div>
                                    <h4>{f.title}</h4>
                                    <p className="small muted">{f.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row-between" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
                    <Link className="btn btn-secondary" to="/verdict">← Verdict</Link>
                    <Link className="btn btn-primary" to="/playbook">Open The Playbook</Link>
                </div>
            </div>
        </>
    )
}