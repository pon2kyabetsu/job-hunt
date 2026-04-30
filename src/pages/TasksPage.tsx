import { TaskCard } from '../features/tasks/components/TaskCard'
import { mockTasks } from '../features/tasks/mockTasks'

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
            <TaskCard key={task.id} task={task} />
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
