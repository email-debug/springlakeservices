import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PracticeAuth from './pages/practice/PracticeAuth'
import PracticeLayout from './pages/practice/PracticeLayout'
import PracticeIndex from './pages/practice/PracticeIndex'
import InternalIndex from './pages/practice/internal/InternalIndex'
import Pipeline from './pages/practice/internal/Pipeline'
import Skills from './pages/practice/internal/Skills'
import Contracts from './pages/practice/internal/Contracts'
import Jobs from './pages/practice/internal/Jobs'
import Team from './pages/practice/internal/Team'
import Agents from './pages/practice/internal/Agents'
import Research from './pages/practice/internal/Research'
import ClientsIndex from './pages/practice/internal/clients/ClientsIndex'
import ClientDetail from './pages/practice/internal/clients/ClientDetail'
import ClientIndex from './pages/practice/client/ClientIndex'
import Services from './pages/practice/client/Services'
import Process from './pages/practice/client/Process'
import TeamClient from './pages/practice/client/Team'
import FAQ from './pages/practice/client/FAQ'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<PracticeAuth />}>
          <Route element={<PracticeLayout />}>
          <Route index element={<PracticeIndex />} />
          <Route path="internal" element={<InternalIndex />} />
          <Route path="internal/pipeline" element={<Pipeline />} />
          <Route path="internal/skills" element={<Skills />} />
          <Route path="internal/contracts" element={<Contracts />} />
          <Route path="internal/jobs" element={<Jobs />} />
          <Route path="internal/team" element={<Team />} />
          <Route path="internal/agents" element={<Agents />} />
          <Route path="internal/research" element={<Research />} />
          <Route path="internal/clients" element={<ClientsIndex />} />
          <Route path="internal/clients/:slug" element={<ClientDetail />} />
          <Route path="client" element={<ClientIndex />} />
          <Route path="client/services" element={<Services />} />
          <Route path="client/process" element={<Process />} />
          <Route path="client/team" element={<TeamClient />} />
          <Route path="client/faq" element={<FAQ />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
