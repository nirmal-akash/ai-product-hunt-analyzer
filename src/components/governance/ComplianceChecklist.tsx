type AuditItem = {
    title: string
    description: string
    time: string
    status: 'complete' | 'pending'
}

const auditItems: AuditItem[] = [
    {
        title: 'KYC/AML Validation Update',
        description: 'Automated cross-reference complete. 4 flags cleared via LexisNexis integration.',
        time: '14:22 GMT',
        status: 'complete',
    },
    {
        title: 'Cap Table Ratification',
        description: 'Series B equity pool authorized. Stakeholder signatures verified digitally.',
        time: '09:15 GMT',
        status: 'complete',
    },
    {
        title: 'Board Resolution 44-B',
        description: 'Awaiting wet signature from Managing Director. Escrow hold active.',
        time: 'PENDING',
        status: 'pending',
    },
]

export default function ComplianceChecklist() {
    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 lg:p-8 hover:border-secondary-fixed-dim transition-colors duration-300">
            <div className="flex justify-between items-end border-b border-outline-variant pb-4 mb-6">
                <h2 className="font-headline-md text-headline-md text-primary-container">Audit Trail</h2>
                <span className="font-mono-data text-mono-data text-on-surface-variant">FY-2024 Q2</span>
            </div>

            <div className="space-y-0">
                {auditItems.map((item, i) => (
                    <div
                        key={item.title}
                        className={`group py-4 flex gap-4 items-start hover:bg-surface/50 transition-colors px-2 -mx-2 rounded ${item.status === 'pending' ? 'opacity-70' : ''
                            } ${i < auditItems.length - 1 ? 'border-b border-outline-variant' : ''}`}
                    >
                        <div
                            className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${item.status === 'complete' ? 'bg-secondary' : 'border border-secondary'
                                }`}
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-body-md text-body-md font-medium text-primary-container">{item.title}</h3>
                                <span
                                    className={`font-mono-data text-mono-data text-[11px] ${item.status === 'pending' ? 'text-outline' : 'text-on-surface-variant'
                                        }`}
                                >
                                    {item.time}
                                </span>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-6 flex items-center gap-2 text-primary-container font-label-caps text-label-caps uppercase hover:text-secondary transition-colors group">
                <span>Export Full Ledger</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                </span>
            </button>
        </div>
    )
}