import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './shared/layouts/MainLayout'
import Login from './features/auth/Login'
import Registro from './features/auth/Registro'
import Materias from './features/onboarding/Materias'
import Preferencias from './features/onboarding/Preferencias'
import Semana from './features/onboarding/Semana'
import RutinaSemanal from './features/dashboard/RutinaSemanal'
import Dashboard from './features/dashboard/Dashboard'
import AgregarTarea from './features/tasks/AgregarTarea'
import CheckinDiario from './features/checkin/CheckinDiario'
import Progreso from './features/progress/Progreso'
import Pomodoro from './features/pomodoro/Pomodoro'
import Configuracion from './features/settings/Configuracion'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/onboarding/materias" element={<Materias />} />
          <Route path="/onboarding/preferencias" element={<Preferencias />} />
          <Route path="/onboarding/semana" element={<Semana />} />
          <Route path="/rutina" element={<RutinaSemanal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tarea/nueva" element={<AgregarTarea />} />
          <Route path="/checkin" element={<CheckinDiario />} />
          <Route path="/progreso" element={<Progreso />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
