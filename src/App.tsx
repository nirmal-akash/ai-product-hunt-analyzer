import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/shared/ErrorBoundary'
import AppShell from './components/layout/AppShell'
import Landing from './pages/Landing'
import Verdict from './pages/Verdict'
import MarketIntelligence from './pages/MarketIntelligence'
import Governance from './pages/Governance'
import History from './pages/History'
import Wizard from './pages/Wizard'
import NotFound from './pages/NotFound'
import Playbook from './pages/Playbook'

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<AppShell />}>
            <Route path="/verdict" element={<Verdict />} />
            <Route path="/genre-benchmark" element={<MarketIntelligence />} />
            <Route path="/compliance" element={<Governance />} />
            <Route path="/history" element={<History />} />
            <Route path="/new-analysis" element={<Wizard />} />
            <Route path="/playbook" element={<Playbook />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App