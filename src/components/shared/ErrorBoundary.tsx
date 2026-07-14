import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = {
    children: ReactNode
}

type State = {
    hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false }

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('Sovereign Intelligence caught an error:', error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-margin-desktop min-h-screen">
                    <span className="font-label-caps text-error tracking-[0.2em] mb-6 uppercase">
                        System Fault
                    </span>
                    <h1 className="font-display-lg text-display-lg text-primary-container mb-6">
                        Something Broke.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-12">
                        An unexpected error occurred while rendering this view. Try refreshing — if the
                        problem persists, the issue has been logged.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-primary-container text-on-primary font-label-caps uppercase px-8 py-4 rounded tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-[18px]">refresh</span>
                        Reload Terminal
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}