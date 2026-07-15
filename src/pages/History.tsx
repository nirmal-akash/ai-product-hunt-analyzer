import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../components/layout/TopBar'

type Genre = 'devtools' | 'fintech' | 'other'
type Filter = 'all' | Genre

type HistoryEntry = {
    name: string
    genre: Genre
    genreLabel: string
    stage: string
    date: string
    score: number
    status: 'Complete' | 'Archived' | 'Early'
}

const entries: HistoryEntry[] = [
    { name: 'TracePulse', genre: 'devtools', genreLabel: 'Developer tools', stage: 'Seed', date: '14 Jul 2026', score: 62, status: 'Complete' },
    { name: 'SchemaForge', genre: 'devtools', genreLabel: 'Developer tools', stage: 'Pre-seed', date: '02 May 2026', score: 41, status: 'Archived' },
    { name: 'Ledgerlane', genre: 'fintech', genreLabel: 'Fintech', stage: 'Seed', date: '19 Mar 2026', score: 55, status: 'Archived' },
    { name: 'Root & Row', genre: 'other', genreLabel: 'Climate', stage: 'Idea', date: '08 Jan 2026', score: 33, status: 'Early' },
]

const statusChipClass: Record<HistoryEntry['status'], string> = {
    Complete: 'chip chip-success',
    Archived: 'chip',
    Early: 'chip chip-warn',
}

const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'devtools', label: 'Developer tools' },
    { key: 'fintech', label: 'Fintech' },
    { key: 'other', label: 'Other' },
]

export default function History() {
    const [filter, setFilter] = useState<Filter>('all')
    const [sort, setSort] = useState<'newest' | 'score' | 'name'>('newest')

    const visible = useMemo(() => {
        const filtered = entries.filter((e) => filter === 'all' || e.genre === filter)
        const sorted = [...filtered]
        if (sort === 'score') sorted.sort((a, b) => b.score - a.score)
        if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name))
        return sorted
    }, [filter, sort])

    return (
        <>
            <TopBar crumb="History" actions={<Link className="btn btn-primary btn-sm" to="/new-analysis">New Analysis</Link>} />
            <div className="content">
                <header className="page-head">
                    <p className="eyebrow">Archive</p>
                    <h1>Past analyses</h1>
                    <p>Every brief you've run — reopen a Verdict, Benchmark, or Playbook from here.</p>
                </header>

                <div className="row-between mb-2" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div className="row gap-sm">
                        {filters.map((f) => (
                            <button
                                key={f.key}
                                type="button"
                                className={`chip${filter === f.key ? ' chip-brass' : ''}`}
                                aria-pressed={filter === f.key}
                                onClick={() => setFilter(f.key)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                    <label className="row gap-sm small muted" style={{ fontWeight: 500 }}>
                        Sort
                        <select
                            className="field-select"
                            style={{ minHeight: 36, padding: '0.35rem 2rem 0.35rem 0.65rem', width: 'auto' }}
                            value={sort}
                            onChange={(e) => setSort(e.target.value as typeof sort)}
                        >
                            <option value="newest">Newest first</option>
                            <option value="score">Highest odds</option>
                            <option value="name">Name</option>
                        </select>
                    </label>
                </div>

                <div className="card">
                    {visible.map((entry) => (
                        <Link className="history-item" to="/verdict" key={entry.name}>
                            <div>
                                <div className="history-title">{entry.name}</div>
                                <div className="history-meta">{entry.genreLabel} · {entry.stage} · {entry.date}</div>
                            </div>
                            <div className="history-score">{entry.score}%</div>
                            <div className="history-actions">
                                <span className={statusChipClass[entry.status]}>{entry.status}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <p className="caption mt-3">Scores are genre-conditioned odds at the time of analysis. Re-run for a fresh Verdict.</p>
            </div>
        </>
    )
}