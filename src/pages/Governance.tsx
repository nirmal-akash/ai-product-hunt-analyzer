import { useEffect, useState } from 'react'
import TopBar from '../components/layout/TopBar'

type ChecklistItem = {
    key: string
    title: string
    caption: string
    defaultDone: boolean
}

const checklistItems: ChecklistItem[] = [
    { key: 'incorp', title: 'Incorporation filed', caption: 'Delaware C-Corp or equivalent', defaultDone: true },
    { key: 'vesting', title: 'Founder vesting agreements', caption: '4-year vest, 1-year cliff documented', defaultDone: true },
    { key: 'ip', title: 'IP assignment from founders', caption: 'Code and trademarks assigned to company', defaultDone: true },
    { key: 'dpa', title: 'Customer DPA template', caption: 'Needed for EU / enterprise evals', defaultDone: false },
    { key: 'privacy', title: 'Privacy policy published', caption: 'Aligned with actual data flows', defaultDone: false },
    { key: 'soc2', title: 'SOC 2 roadmap dated', caption: 'Even a public timeline unblocks deals', defaultDone: false },
]

const auditEvents = [
    { when: '2026-07-14', event: 'Analysis submitted — TracePulse', actor: 'A. Kline', status: 'Logged' },
    { when: '2026-06-02', event: 'Option pool reserved at 15%', actor: 'Board consent', status: 'Filed' },
    { when: '2026-03-18', event: 'Founder stock purchase agreements', actor: 'Counsel', status: 'Executed' },
    { when: '2026-01-09', event: 'Certificate of incorporation', actor: 'Registered agent', status: 'Filed' },
]

const STORAGE_KEY = 'si-compliance-checks'

export default function Governance() {
    const [founderA, setFounderA] = useState(48)
    const [founderB, setFounderB] = useState(37)
    const [pool, setPool] = useState(15)
    const [checks, setChecks] = useState<Record<string, boolean>>({})

    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
            setChecks(saved)
        } catch {
            // ignore malformed storage
        }
    }, [])

    const toggleCheck = (key: string, defaultDone: boolean) => {
        const current = checks[key] ?? defaultDone
        const next = { ...checks, [key]: !current }
        setChecks(next)
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        } catch {
            // ignore storage failures
        }
    }

    const total = founderA + founderB + pool
    const pct = (v: number) => (total ? (v / total) * 100 : 0)

    return (
        <>
            <TopBar crumb="Compliance" actions={<span className="chip">Utility</span>} />
            <div className="content">
                <header className="page-head">
                    <p className="eyebrow">Secondary tools</p>
                    <h1>Compliance &amp; equity</h1>
                    <p>Quiet governance utilities — present when you need them, never the product headline.</p>
                </header>

                <div className="grid-2 mb-3" style={{ alignItems: 'start' }}>
                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">Equity calculator</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '1rem' }}>Founder split</h3>
                        <div className="stack">
                            <div className="field">
                                <label htmlFor="f1">Founder A — A. Kline (%)</label>
                                <input
                                    className="field-input mono"
                                    id="f1"
                                    type="number"
                                    min={0}
                                    max={100}
                                    value={founderA}
                                    onChange={(e) => setFounderA(Math.max(0, Number(e.target.value) || 0))}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="f2">Founder B — M. Okada (%)</label>
                                <input
                                    className="field-input mono"
                                    id="f2"
                                    type="number"
                                    min={0}
                                    max={100}
                                    value={founderB}
                                    onChange={(e) => setFounderB(Math.max(0, Number(e.target.value) || 0))}
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="pool">Option pool (%)</label>
                                <input
                                    className="field-input mono"
                                    id="pool"
                                    type="number"
                                    min={0}
                                    max={100}
                                    value={pool}
                                    onChange={(e) => setPool(Math.max(0, Number(e.target.value) || 0))}
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="equity-visual">
                                <div className="equity-seg" style={{ width: `${pct(founderA)}%`, background: 'var(--fg)' }} />
                                <div className="equity-seg" style={{ width: `${pct(founderB)}%`, background: 'var(--muted)' }} />
                                <div className="equity-seg" style={{ width: `${pct(pool)}%`, background: 'var(--accent)' }} />
                            </div>
                            <div className="equity-legend">
                                <div className="equity-legend-item"><span className="swatch" style={{ background: 'var(--fg)' }} /> Founder A <span className="mono muted">{founderA}%</span></div>
                                <div className="equity-legend-item"><span className="swatch" style={{ background: 'var(--muted)' }} /> Founder B <span className="mono muted">{founderB}%</span></div>
                                <div className="equity-legend-item"><span className="swatch" style={{ background: 'var(--accent)' }} /> Option pool <span className="mono muted">{pool}%</span></div>
                            </div>
                            {total === 100 ? (
                                <p className="caption mt-2">Total 100% · Vesting assumed 4yr / 1yr cliff (not legal advice)</p>
                            ) : (
                                <p className="field-err-msg" style={{ marginTop: '0.5rem' }}>
                                    Total {total}% · adjust to 100%
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">Regulatory checklist</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.35rem' }}>Seed SaaS basics</h3>
                        <p className="caption mb-2">Toggle items as you complete them. Status is stored in this browser only.</p>
                        <div>
                            {checklistItems.map((item) => {
                                const done = checks[item.key] ?? item.defaultDone
                                return (
                                    <div className="check-item" key={item.key}>
                                        <button
                                            type="button"
                                            className={`check-box${done ? ' done' : ''}`}
                                            aria-pressed={done}
                                            onClick={() => toggleCheck(item.key, item.defaultDone)}
                                        >
                                            {done && <svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" /></svg>}
                                        </button>
                                        <div>
                                            <strong>{item.title}</strong>
                                            <p className="caption">{item.caption}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-pad" style={{ borderBottom: '1px solid var(--border)' }}>
                        <p className="eyebrow">Audit trail</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginTop: '0.25rem' }}>
                            Recent governance events
                        </h3>
                    </div>
                    <div className="table-wrap">
                        <table className="data">
                            <thead>
                                <tr>
                                    <th>When</th>
                                    <th>Event</th>
                                    <th>Actor</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {auditEvents.map((e) => (
                                    <tr key={e.when}>
                                        <td className="mono small">{e.when}</td>
                                        <td>{e.event}</td>
                                        <td>{e.actor}</td>
                                        <td><span className="chip chip-success">{e.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <p className="caption mt-3">Not legal advice. Export and review with counsel before relying on any calculation or checklist state.</p>
            </div>
        </>
    )
}