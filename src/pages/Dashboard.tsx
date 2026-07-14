import { useEffect, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import ProbabilityGauge from '../components/dashboard/ProbabilityGauge'
import ShapWaterfall from '../components/dashboard/ShapWaterfall'
import KeyDrivers from '../components/dashboard/KeyDrivers'
import { DashboardSkeleton } from '../components/shared/SkeletonLoader'

export default function Dashboard() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Prediction Engine"
                subtitle="Product Hunt Launch Analysis"
                actions={
                    <>
                        <span className="font-mono-data text-mono-data text-on-surface-variant px-3 py-1 border border-outline-variant rounded bg-surface-container-lowest">
                            MODEL: PH-V2.1.4
                        </span>
                        <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-primary-container hover:bg-surface-container-low transition-colors">
                            <span className="material-symbols-outlined">download</span>
                        </button>
                    </>
                }
            />

            {loading ? (
                <DashboardSkeleton />
            ) : (
                <div className="flex-1 p-margin-desktop overflow-y-auto">
                    <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
                        <div className="md:col-span-8 space-y-gutter">
                            <section className="bg-surface-container-lowest border border-outline-variant rounded p-8 relative overflow-hidden hover:border-secondary transition-colors duration-500">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="flex-1 space-y-4">
                                        <h3 className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
                                            Primary Inference
                                        </h3>
                                        <h4 className="font-display-lg text-display-lg text-primary-container">
                                            Probability of Top 3 Finish
                                        </h4>
                                        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                                            Our algorithmic consensus indicates a highly favorable structural setup for this launch, primarily driven by pre-launch community velocity and ideal timing windows.
                                        </p>
                                    </div>
                                    <ProbabilityGauge />
                                </div>
                            </section>

                            <ShapWaterfall />
                        </div>

                        <div className="md:col-span-4 h-full">
                            <KeyDrivers />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}