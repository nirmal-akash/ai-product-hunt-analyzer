import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div
            className="content"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <p className="eyebrow" style={{ color: 'var(--accent-ink)' }}>Error 404</p>
            <h1 style={{ marginBottom: '1rem' }}>This brief doesn't exist.</h1>
            <p className="small muted mb-3" style={{ maxWidth: '40ch' }}>
                The page you're looking for has moved, or was never analysed. Head back to your workspace.
            </p>
            <Link className="btn btn-accent" to="/verdict">
                ← Back to Verdict
            </Link>
        </div>
    )
}