import { Link } from 'react-router-dom'
import { House, BookCheck, User, Award } from 'lucide-react'

export default function Nav() {
  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: House },
    { to: '/tarea/nueva', label: 'Tarea', icon: BookCheck },
    { to: '/progreso', label: 'Progreso', icon: Award },
    { to: '/configuracion', label: 'Config', icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-[72px] px-4 pb-3 bg-surface">
      {links.map(({ to, label, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          className="flex flex-col items-center rounded-md px-3 py-1.5 pt-3 text-sm text-text-muted transition-colors hover:text-text"
        >
          <Icon className="w-6 h-6 text-center" size={16} />
          <span className="text-xs">{label}</span>
        </Link>
      ))}
    </nav>
  )
}
