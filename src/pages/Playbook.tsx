import { Link } from 'react-router-dom'
import TopBar from '../components/layout/TopBar'

const actions = [
    {
        num: 1,
        title: 'Rewrite the homepage around one job',
        body: 'Lead with "See which API endpoint is burning latency in under 10 minutes." Kill feature comparison tables against Datadog. Measure: demo-to-signup conversion.',
        tag: 'This week',
        brass: true,
    },
    {
        num: 2,
        title: 'Ship the "whole product" pack',
        body: 'One-pager security overview, DPA, SOC2 roadmap, and a Datadog free → TracePulse migration checklist. Pragmatists will not buy without these.',
        tag: '2 weeks',
        brass: false,
    },
    {
        num: 3,
        title: 'Hire or contract one AE for 30-day evals',
        body: 'Founder-led sales is maxed near your MRR. A single AE running structured evaluations unlocks the next band without a full sales org.',
        tag: '30 days',
        brass: false,
    },
    {
        num: 4,
        title: 'Narrow the beachhead publicly',
        body: 'Publish three case studies only from Series A SaaS on Node/Go + OTel. Decline out-of-ICP pilots that dilute positioning.',
        tag: '45 days',
        brass: false,
    },
    {
        num: 5,
        title: 'Instrument product-led usage alerts',
        body: 'When free-tier usage hits a value moment (first slow-trace found), trigger an in-product upgrade path before a sales email. Peers who did this raised A with higher NRR.',
        tag: '90 days',
        brass: false,
    },
]

export default function Playbook() {
    return (
        <>
            <TopBar
                crumb="The Playbook"
                actions={<Link className="btn btn-secondary btn-sm" to="/compliance">Compliance</Link>}
            />
            <div className="content">
                <header className="page-head">
                    <p className="eyebrow">Counsel · developer tools</p>
                    <h1>The Playbook</h1>
                    <p>Patterns from successful peers, a named framework on your weak points, and five moves for the next quarter.</p>
                </header>

                <div className="card card-pad-lg mb-3">
                    <p className="eyebrow mb-1">Genre success patterns</p>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.15rem' }}>What worked for seed observability companies</h2>
                    <div className="grid-2">
                        <div className="stack-sm">
                            <div>
                                <h4>Wedge before platform</h4>
                                <p className="small muted">Winners shipped one painful job (e.g. "find the slow endpoint") before expanding. Full APM clones stalled.</p>
                            </div>
                            <div>
                                <h4>Time-to-first-insight &lt; 30 min</h4>
                                <p className="small muted">Self-serve install with a sample service beat demos. If value needed a sales engineer, conversion lagged.</p>
                            </div>
                        </div>
                        <div className="stack-sm">
                            <div>
                                <h4>One paid champion path</h4>
                                <p className="small muted">Free tier → usage alert → founder call → annual. Not "talk to sales" on day one.</p>
                            </div>
                            <div>
                                <h4>Narrative: cost + calm, not coverage</h4>
                                <p className="small muted">Buyers tired of "we monitor everything." Messaging that cut noise and bill shock outperformed feature grids.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-pad-lg mb-3">
                    <p className="eyebrow mb-1">Framework applied to TracePulse</p>
                    <div className="framework">
                        <p className="name">Crossing the Chasm — Beachhead focus</p>
                        <p className="small muted" style={{ maxWidth: '58ch', lineHeight: 1.55, marginBottom: '1rem' }}>
                            Geoffrey Moore's model fits your gap: you have early adopters (technical founders)
                            but not a whole-product story for the pragmatic majority (VP Eng at Series A SaaS).
                            The chasm is distribution and positioning — not product depth.
                        </p>
                        <div className="stack-sm">
                            <div className="row" style={{ alignItems: 'flex-start', gap: '0.75rem' }}>
                                <span className="chip chip-danger">Weak</span>
                                <p className="small"><strong>Whole product:</strong> Missing security packet, migration guide from Datadog free, and a public status/SLA page that pragmatists demand.</p>
                            </div>
                            <div className="row" style={{ alignItems: 'flex-start', gap: '0.75rem' }}>
                                <span className="chip chip-warn">Weak</span>
                                <p className="small"><strong>Beachhead:</strong> ICP is right but still too broad ("5–40 eng"). Narrow to "Series A SaaS, Node/Go, already on OTel collectors."</p>
                            </div>
                            <div className="row" style={{ alignItems: 'flex-start', gap: '0.75rem' }}>
                                <span className="chip chip-success">Strong</span>
                                <p className="small"><strong>Visionaries:</strong> Domain founders and warm intros match the early market. Protect this channel while building the pragmatic path.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-pad-lg mb-3">
                    <p className="eyebrow mb-1">Recommended next actions</p>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Five moves for the next 90 days</h2>
                    <p className="small muted mb-2">Ordered by leverage on your Verdict gaps (GTM and differentiation).</p>

                    {actions.map((a) => (
                        <div className="action-item" key={a.num}>
                            <div className="action-num">{a.num}</div>
                            <div className="action-body">
                                <h4>{a.title}</h4>
                                <p>{a.body}</p>
                            </div>
                            <span className={`chip action-tag${a.brass ? ' chip-brass' : ''}`}>{a.tag}</span>
                        </div>
                    ))}
                </div>

                <div className="card-inset card-pad mb-3">
                    <p className="small muted" style={{ lineHeight: 1.5 }}>
                        <strong style={{ color: 'var(--fg)' }}>Counsel note:</strong> None of these replace
                        product quality — they address the factors that currently hurt your score. Re-run
                        analysis after the beachhead pack and AE hire; expect the model to reweight GTM
                        upward if conversion improves.
                    </p>
                </div>

                <div className="row-between" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
                    <Link className="btn btn-secondary" to="/genre-benchmark">← Genre Benchmark</Link>
                    <Link className="btn btn-primary" to="/compliance">Compliance tools</Link>
                </div>
            </div>
        </>
    )
}