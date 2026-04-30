import {
  taskCategoryLabels,
  taskPriorityLabels,
  taskStatusLabels,
} from '../taskLabels'
import type { Task } from '../types'

type TaskCardProps = {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="task-card">
      <div className="task-card-main">
        <p className="task-category">{taskCategoryLabels[task.category]}</p>
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
  )
}
