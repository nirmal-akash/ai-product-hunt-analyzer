import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="max-w-max-width mx-auto px-margin-mobile lg:px-margin-desktop text-center py-20 flex flex-col items-center">
            <span className="font-label-caps text-secondary tracking-[0.2em] mb-6 uppercase">
                Alpha Terminal V3.4
            </span>
            <h1 className="font-display-lg-mobile lg:font-display-lg text-display-lg-mobile lg:text-display-lg text-primary-container max-w-4xl mb-8 leading-tight">
                Success is not a guess.
                <br />
                <span className="italic" style={{ color: '#8d4b4d' }}>It's a signal.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
                Deploy institutional-grade analytical rigor to the startup ecosystem. Anticipate market
                movements, track sentiment velocity, and govern your portfolio with precision.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
                <Link
                    to="/wizard"
                    className="bg-primary-container text-on-primary font-label-caps uppercase px-8 py-4 rounded tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                    Start Analyzing
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <button className="bg-transparent border border-outline-variant text-primary-container font-label-caps uppercase px-8 py-4 rounded tracking-widest hover:border-secondary transition-colors">
                    Request Audit
                </button>
            </div>
        </section>
    )
}