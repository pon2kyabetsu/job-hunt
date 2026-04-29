import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'ダッシュボード', to: '/dashboard' },
  { label: 'タスク管理', to: '/tasks' },
  { label: '応募企業', to: '/companies' },
  { label: '振り返り', to: '/reflections' },
  { label: '設定', to: '/settings' },
]

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="メインナビゲーション">
      <nav className="sidebar-nav">
        {navigationItems.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
            key={item.to}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
