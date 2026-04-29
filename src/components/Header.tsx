import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <header className="app-header">
      <Link className="brand-link" to="/dashboard">
        Career Manager
      </Link>
      <button
        className="secondary-button"
        type="button"
        onClick={() => navigate('/login')}
      >
        ログアウト
      </button>
    </header>
  )
}

export default Header
