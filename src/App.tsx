import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import MobileNav from './components/layout/MobileNav'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import MarketIntelligence from './pages/MarketIntelligence'
import Governance from './pages/Governance'
import History from './pages/History'
import NotFound from './pages/NotFound'
import Wizard from './pages/Wizard'
import ErrorBoundary from './components/shared/ErrorBoundary'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-background min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
        <MobileNav />
        <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/market-intelligence" element={<MarketIntelligence />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/history" element={<History />} />
            <Route path="/wizard" element={<Wizard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App