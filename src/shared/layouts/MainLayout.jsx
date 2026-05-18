import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Kairos</h1>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8 pb-24">
        <Outlet />
      </main>
      <Nav />
    </div>
  )
}
