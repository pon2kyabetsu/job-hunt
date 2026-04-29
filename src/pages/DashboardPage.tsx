const dashboardCards = [
  {
    title: '今日やること',
    description: '応募書類の見直し、学習タスク、面接準備をここに表示する想定です。',
  },
  {
    title: '応募状況',
    description: '応募済み、選考中、面接予定などの件数を確認できるようにします。',
  },
  {
    title: '直近のアクション',
    description: '企業への連絡、面接日程、学習ログなどを時系列で並べます。',
  },
]

function DashboardPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Dashboard</p>
        <h1>ダッシュボード</h1>
        <p>転職活動と学習の状況を、最初に確認する画面です。</p>
      </div>

      <div className="dashboard-grid">
        {dashboardCards.map((card) => (
          <article className="info-card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DashboardPage
