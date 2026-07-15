import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div>
            <section className="hero">
                <div className="hero-copy">
                    <p className="eyebrow" style={{ color: 'var(--accent-ink)' }}>Counsel for founders</p>
                    <h1>Know where your idea stands — before you bet years on it.</h1>
                    <p className="lede">
                        Sovereign Intelligence reads your product against category peers,
                        explains every factor, and hands you a playbook — not a black box score.
                    </p>
                    <div className="hero-actions">
                        <Link className="btn btn-accent" to="/wizard">Analyse my idea</Link>
                        <Link className="btn btn-secondary" to="/verdict">See a sample verdict</Link>
                    </div>
                </div>

                <div className="hero-preview">
                    <div className="hero-preview-bar">
                        <span className="dot" /><span className="dot" /><span className="dot" />
                        <span className="caption" style={{ marginLeft: '0.5rem' }}>Verdict · TracePulse</span>
                    </div>
                    <div className="hero-preview-body">
                        <div className="row-between mb-2">
                            <div>
                                <p className="eyebrow">Developer tools</p>
                                <h3 style={{ fontSize: '1.35rem', marginTop: '0.25rem' }}>
                                    API observability for small teams
                                </h3>
                            </div>
                            <span className="chip chip-brass">Sample</span>
                        </div>
                        <div className="row" style={{ gap: '1.5rem', alignItems: 'center' }}>
                            <div className="score-ring" style={{ ['--p' as any]: 62, width: 120, height: 120 }}>
                                <div className="score-ring-inner">
                                    <div className="val" style={{ fontSize: '1.75rem' }}>62%</div>
                                    <div className="lbl">Odds</div>
                                </div>
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div className="bar-row" style={{ gridTemplateColumns: '1fr 1fr 36px', marginBottom: '0.5rem' }}>
                                    <span className="bar-label">Team focus</span>
                                    <div className="bar-track"><div className="bar-fill pos" style={{ width: '78%' }} /></div>
                                    <span className="bar-val">+12</span>
                                </div>
                                <div className="bar-row" style={{ gridTemplateColumns: '1fr 1fr 36px', marginBottom: '0.5rem' }}>
                                    <span className="bar-label">Market timing</span>
                                    <div className="bar-track"><div className="bar-fill pos" style={{ width: '64%' }} /></div>
                                    <span className="bar-val">+8</span>
                                </div>
                                <div className="bar-row" style={{ gridTemplateColumns: '1fr 1fr 36px', marginBottom: 0 }}>
                                    <span className="bar-label">Go-to-market</span>
                                    <div className="bar-track"><div className="bar-fill neg" style={{ width: '42%' }} /></div>
                                    <span className="bar-val">−9</span>
                                </div>
                            </div>
                        </div>
                        <p className="small muted mt-2" style={{ lineHeight: 1.45 }}>
                            Strong product-market fit signals in developer tools; distribution and
                            sales motion need deliberate design before Series A.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" id="how">
                <div className="section-head">
                    <p className="eyebrow">How it works</p>
                    <h2>Three steps. Full transparency.</h2>
                    <p>Submit once. Receive a verdict you can defend to a co-founder or board.</p>
                </div>
                <div className="feature-grid">
                    <article className="feature-card">
                        <div className="icon-wrap">
                            <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
                        </div>
                        <h3>Describe the idea</h3>
                        <p>Category, stage, team, traction, and constraints — the details that actually move outcomes.</p>
                    </article>
                    <article className="feature-card">
                        <div className="icon-wrap">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                        </div>
                        <h3>Read the verdict</h3>
                        <p>A probability with feature importance — what helped, what hurt, in plain language.</p>
                    </article>
                    <article className="feature-card">
                        <div className="icon-wrap">
                            <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                        </div>
                        <h3>Follow the playbook</h3>
                        <p>Genre patterns and a named framework applied to your weak points — with next actions.</p>
                    </article>
                </div>
            </section>

            <section className="quote-band">
                <blockquote>
                    <p>"Success isn't universal. It's category-specific. We measure you against the field you actually play in."</p>
                    — Sovereign Intelligence methodology
                </blockquote>
            </section>

            <section className="section" id="what">
                <div className="section-head">
                    <p className="eyebrow">What you receive</p>
                    <h2>An advisor's brief, not a dashboard wall.</h2>
                    <p>Every screen is written so a stressed founder knows exactly what to do next.</p>
                </div>
                <div className="grid-2">
                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">Verdict</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            Probability + explanation
                        </h3>
                        <p className="small muted">Transparent feature weights. No unexplained scores. Written for humans who make hard bets.</p>
                    </div>
                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">Genre Benchmark</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            Peers in your category
                        </h3>
                        <p className="small muted">Sentiment, positioning, and friction points drawn from startups in the same genre — not the whole market.</p>
                    </div>
                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">The Playbook</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            Counsel you can act on
                        </h3>
                        <p className="small muted">Established frameworks applied to your gaps, with 3–5 concrete next moves for the next quarter.</p>
                    </div>
                    <div className="card card-pad-lg">
                        <p className="eyebrow mb-1">Compliance</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            Quiet governance tools
                        </h3>
                        <p className="small muted">Equity splits and regulatory checklists as a secondary utility — present when needed, never the headline.</p>
                    </div>
                </div>
                <div className="mt-4" style={{ textAlign: 'center' }}>
                    <Link className="btn btn-accent" to="/wizard">Begin your analysis</Link>
                </div>
            </section>
        </div>
    )
}