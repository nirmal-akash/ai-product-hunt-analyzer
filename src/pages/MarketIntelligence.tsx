import { useEffect, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import SentimentTrendChart from '../components/market-intelligence/SentimentTrendChart'
import CompetitorCard from '../components/market-intelligence/CompetitorCard'
import PainPointList from '../components/market-intelligence/PainPointList'
import { MarketIntelligenceSkeleton } from '../components/shared/SkeletonLoader'

const competitors = [
    {
        name: 'Nexus Systems',
        domain: 'nexus.io',
        icon: 'corporate_fare',
        shareOfVoice: '34.2%',
        sentimentShift: '-2.1 pts',
        sentimentDirection: 'down' as const,
        communityTrust: '68/100',
        badge: 'High Opportunity',
    },
    {
        name: 'Aether Analytics',
        domain: 'aether.co',
        icon: 'domain',
        shareOfVoice: '28.5%',
        sentimentShift: '+1.4 pts',
        sentimentDirection: 'up' as const,
        communityTrust: '82/100',
    },
    {
        name: 'Vanguard Core',
        domain: 'vanguard.net',
        icon: 'factory',
        shareOfVoice: '15.8%',
        sentimentShift: '0.0 pts',
        sentimentDirection: 'flat' as const,
        communityTrust: '75/100',
    },
]

export default function MarketIntelligence() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200)
        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <MarketIntelligenceSkeleton />
    }

    return (
        <div className="p-margin-mobile md:p-margin-desktop w-full max-w-container-max mx-auto">
            <PageHeader
                variant="display"
                title="Market Intelligence"
                subtitle="Aggregate sector sentiment, competitive positioning, and emerging friction points derived from global signals."
            />

            <SentimentTrendChart />

            <section className="mb-12">
                <h2 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-6">
                    Competitive Matrix
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    {competitors.map((c) => (
                        <CompetitorCard key={c.name} {...c} />
                    ))}
                </div>
            </section>

            <PainPointList />
        </div>
    )
}