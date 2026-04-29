import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <section className="not-found-panel">
        <p className="eyebrow">404</p>
        <h1>ページが見つかりません</h1>
        <p>URLを確認するか、ダッシュボードへ戻ってください。</p>
        <Link className="primary-button link-button" to="/dashboard">
          ダッシュボードへ戻る
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
