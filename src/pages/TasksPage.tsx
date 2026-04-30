import { mockTasks } from '../features/tasks/mockTasks'
import type {
  TaskCategory,
  TaskPriority,
  TaskStatus,
} from '../features/tasks/types'

const taskStatusLabels: Record<TaskStatus, string> = {
  todo: '未着手',
  inProgress: '進行中',
  done: '完了',
}

const taskPriorityLabels: Record<TaskPriority, string> = {
  high: '高',
  medium: '中',
  low: '低',
}

const taskCategoryLabels: Record<TaskCategory, string> = {
  learning: '学習',
  portfolio: 'ポートフォリオ',
  application: '応募',
  interview: '面接対策',
  document: 'ドキュメント',
}

function TasksPage() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Tasks</p>
        <h1>タスク管理</h1>
        <p>
          学習タスクや転職活動タスクを登録し、進捗を管理する画面になる予定です。
        </p>
      </div>

      {mockTasks.length > 0 ? (
        <div className="task-list" aria-label="タスク一覧">
          {mockTasks.map((task) => (
            <article className="task-card" key={task.id}>
              <div className="task-card-main">
                <p className="task-category">
                  {taskCategoryLabels[task.category]}
                </p>
                <h2>{task.title}</h2>
              </div>

              <dl className="task-meta">
                <div>
                  <dt>ステータス</dt>
                  <dd>{taskStatusLabels[task.status]}</dd>
                </div>
                <div>
                  <dt>優先度</dt>
                  <dd>{taskPriorityLabels[task.priority]}</dd>
                </div>
                <div>
                  <dt>期限</dt>
                  <dd>{task.dueDate ?? '未設定'}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>まだタスクがありません。最初のタスクを追加しましょう。</p>
        </div>
      )}
    </section>
  )
}

export default TasksPage
