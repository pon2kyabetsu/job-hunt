import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import CompaniesPage from './pages/CompaniesPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import ReflectionsPage from './pages/ReflectionsPage'
import SettingsPage from './pages/SettingsPage'
import TasksPage from './pages/TasksPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 認証ガード未実装の間は、アプリ起動時にダッシュボードへ直接遷移させる。 */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/reflections" element={<ReflectionsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
