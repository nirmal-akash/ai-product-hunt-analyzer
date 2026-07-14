import { useState, type ReactNode } from 'react'

type Tab = {
    id: string
    label: string
    icon: string
    content: ReactNode
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
    const [activeId, setActiveId] = useState(tabs[0]?.id)
    const activeTab = tabs.find((t) => t.id === activeId)

    return (
        <div>
            <div className="border-b border-outline-variant mb-8 flex gap-8">
                {tabs.map((tab) => {
                    const active = tab.id === activeId
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveId(tab.id)}
                            className={`pb-4 font-label-caps text-label-caps uppercase tracking-wider transition-all flex items-center gap-2 border-b-2 ${active
                                    ? 'text-primary-container border-secondary font-bold'
                                    : 'text-on-surface-variant border-transparent hover:text-primary-container'
                                }`}
                        >
                            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                            {tab.label}
                        </button>
                    )
                })}
            </div>
            <div>{activeTab?.content}</div>
        </div>
    )
}