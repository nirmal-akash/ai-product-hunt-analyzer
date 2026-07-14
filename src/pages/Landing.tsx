import Hero from '../components/landing/Hero'
import LiveDemoPreview from '../components/landing/LiveDemoPreview'
import FeatureGrid from '../components/landing/FeatureGrid'

export default function Landing() {
    return (
        <main className="flex-1">
            <Hero />
            <LiveDemoPreview />
            <FeatureGrid />
        </main>
    )
}