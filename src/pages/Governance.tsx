import { useEffect, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import Tabs from '../components/shared/Tabs'
import ComplianceChecklist from '../components/governance/ComplianceChecklist'
import EquityCalculator from '../components/governance/EquityCalculator'
import HistoricalComparisonTable from '../components/governance/HistoricalComparisonTable'
import { GovernanceSkeleton } from '../components/shared/SkeletonLoader'

export default function Governance() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200)
        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <GovernanceSkeleton />
    }

    return (
        <div className="p-margin-mobile lg:p-margin-desktop w-full max-w-container-max mx-auto">
            <PageHeader
                variant="display"
                eyebrow={[{ label: 'Risk Framework' }, { label: 'Protocol 4A', active: true }]}
                title="Governance & Compliance"
                subtitle="Regulatory audit trails and real-time equity distribution models for active portfolio entities."
            />

            <Tabs
                tabs={[
                    {
                        id: 'checklist',
                        label: 'Compliance Checklist',
                        icon: 'fact_check',
                        content: (
                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-start">
                                <div className="xl:col-span-7">
                                    <ComplianceChecklist />
                                </div>
                                <div className="xl:col-span-5">
                                    <EquityCalculator />
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'history',
                        label: 'Historical Comparison',
                        icon: 'history',
                        content: <HistoricalComparisonTable />,
                    },
                ]}
            />
        </div>
    )
}