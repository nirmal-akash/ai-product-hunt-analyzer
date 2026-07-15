import { Link, useLocation } from 'react-router-dom'
import { useLayout } from './LayoutContext'

export default function Sidebar() {
    const location = useLocation()
    const { mobileOpen } = useLayout()
    const isActive = (path: string) => location.pathname === path

    return (
        <aside className={`sidebar${mobileOpen ? ' open' : ''}`}>
            <Link to="/verdict" className="brand">
                <div className="brand-mark" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" /><path d="M12 5v14M5 12h14" /></svg>
                </div>
                <div>
                    <div className="brand-name">Sovereign</div>
                    <div className="brand-sub">Intelligence</div>
                </div>
            </Link>

            <nav className="nav-section">
                <p className="nav-label">Workspace</p>
                <Link className={`nav-link${isActive('/new-analysis') ? ' active' : ''}`} to="/new-analysis">
                    <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
                    New Analysis
                </Link>
                <Link className={`nav-link${isActive('/history') ? ' active' : ''}`} to="/history">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                    History
                    <span className="badge">4</span>
                </Link>

                <p className="nav-label">This brief</p>
                <Link className={`nav-link${isActive('/verdict') ? ' active' : ''}`} to="/verdict">
                    <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                    Verdict
                </Link>
                <Link className={`nav-link${isActive('/genre-benchmark') ? ' active' : ''}`} to="/genre-benchmark">
                    <svg viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
                    Genre Benchmark
                </Link>
                <Link className={`nav-link${isActive('/playbook') ? ' active' : ''}`} to="/playbook">
                    <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                    The Playbook
                </Link>

                <p className="nav-label">Utility</p>
                <Link className={`nav-link${isActive('/compliance') ? ' active' : ''}`} to="/compliance">
                    <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                    Compliance
                </Link>
            </nav>

            <div className="sidebar-foot">
                <div className="user-chip">
                    <div className="user-avatar">AK</div>
                    <div className="user-meta">
                        <div className="user-name">A. Kline</div>
                        <div className="user-role">Founder</div>
                    </div>
                </div>
            </div>
        </aside>
    )
}