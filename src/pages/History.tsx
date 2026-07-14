import PageHeader from '../components/layout/PageHeader'
import HistoryCard from '../components/history/HistoryCard'

const analyses = [
    {
        productName: 'Nexus Systems',
        date: 'Jul 08, 2026',
        category: 'Developer Tools',
        probability: 87,
        status: 'Analyzed' as const,
    },
    {
        productName: 'Aether Analytics',
        date: 'Jun 22, 2026',
        category: 'Fintech',
        probability: 74,
        status: 'Analyzed' as const,
    },
    {
        productName: 'Vanguard Core',
        date: 'Jun 14, 2026',
        category: 'AI Infrastructure',
        probability: 91,
        status: 'Archived' as const,
    },
    {
        productName: 'Synapse Genomics',
        date: 'Jun 02, 2026',
        category: 'Healthtech',
        probability: 62,
        status: 'Archived' as const,
    },
]

export default function History() {
    return (
        <div className="p-margin-mobile lg:p-margin-desktop w-full max-w-container-max mx-auto">
            <PageHeader
                variant="display"
                eyebrow={[{ label: 'Terminal' }, { label: 'Analysis History', active: true }]}
                title="Past Analyses"
                subtitle="Review, compare, and revisit every product submitted for prediction and market intelligence analysis."
            />

            <div className="flex flex-col gap-4">
                {analyses.map((a) => (
                    <HistoryCard key={a.productName} {...a} />
                ))}
            </div>
        </div>
    )
}