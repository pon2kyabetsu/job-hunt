import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  // 認証処理は未実装のため、現時点ではログイン後画面への遷移だけを確認する。
  const goToDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-copy">
          <p className="eyebrow">Career Manager</p>
          <h1 id="login-title">転職活動と学習を、ひとつの流れで管理する</h1>
          <p>
            今日のタスク、応募状況、振り返りをまとめて確認できる管理アプリです。
          </p>
        </div>

        <form
          className="login-form"
          onSubmit={(event) => {
            event.preventDefault()
            goToDashboard()
          }}
        >
          <label>
            メールアドレス
            <input
              autoComplete="email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </label>
          <label>
            パスワード
            <input
              autoComplete="current-password"
              name="password"
              placeholder="password"
              type="password"
            />
          </label>
          <button className="primary-button" type="submit">
            ログイン
          </button>
          <button className="secondary-button full-width" type="button" onClick={goToDashboard}>
            デモログイン
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginPage
