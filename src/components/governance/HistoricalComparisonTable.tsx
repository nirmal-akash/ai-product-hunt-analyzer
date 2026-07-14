type Analysis = {
    date: string
    entity: string
    framework: string
    riskScore: string
    scoreColor?: string
}

const analyses: Analysis[] = [
    { date: '2024-05-12', entity: 'Aether Dynamics', framework: 'Basel III Compliant', riskScore: 'A-' },
    { date: '2024-04-28', entity: 'Nexus Capital', framework: 'Internal Rubric V2', riskScore: 'B+', scoreColor: 'text-secondary' },
    { date: '2024-03-15', entity: 'Synapse Genomics', framework: 'FDA Title 21', riskScore: 'A+' },
]

export default function HistoricalComparisonTable() {
    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 lg:p-8">
            <div className="flex justify-between items-end border-b border-outline-variant pb-4 mb-6">
                <h2 className="font-headline-md text-headline-md text-primary-container">Analysis Repository</h2>
                <span className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">filter_list</span> Filter
                </span>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-outline-variant">
                            <th className="py-3 font-label-caps text-label-caps text-on-surface-variant font-normal">Date</th>
                            <th className="py-3 font-label-caps text-label-caps text-on-surface-variant font-normal">Entity</th>
                            <th className="py-3 font-label-caps text-label-caps text-on-surface-variant font-normal">Framework</th>
                            <th className="py-3 font-label-caps text-label-caps text-on-surface-variant font-normal text-right">
                                Risk Score
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-mono-data text-[13px] text-primary-container">
                        {analyses.map((row) => (
                            <tr
                                key={row.entity}
                                className="border-b border-surface-variant hover:bg-surface transition-colors cursor-pointer group"
                            >
                                <td className="py-4 text-on-surface-variant group-hover:text-primary-container transition-colors">
                                    {row.date}
                                </td>
                                <td className="py-4">{row.entity}</td>
                                <td className="py-4">{row.framework}</td>
                                <td className={`py-4 text-right ${row.scoreColor ?? ''}`}>{row.riskScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}