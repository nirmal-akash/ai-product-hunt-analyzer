import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-margin-desktop min-h-screen">
            <span className="font-label-caps text-secondary tracking-[0.2em] mb-6 uppercase">
                Error 404
            </span>
            <h1 className="font-display-lg text-display-lg text-primary-container mb-6">
                Signal Lost.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-12">
                The page you're looking for doesn't exist, or has moved outside our analytical range.
            </p>
            <Link
                to="/"
                className="bg-primary-container text-on-primary font-label-caps uppercase px-8 py-4 rounded tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2"
            >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Return to Terminal
            </Link>
        </div>
    )
}