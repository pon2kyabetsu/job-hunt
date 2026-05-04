import { useState } from 'react'
import { TaskForm } from '../features/tasks/components/TaskForm'
import { TaskCard } from '../features/tasks/components/TaskCard'
import { mockTasks } from '../features/tasks/mockTasks'
import type { Task, TaskFormValues } from '../features/tasks/types'

function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)

  function handleAddTask(values: TaskFormValues) {
    const now = new Date().toISOString()
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: values.title,
      status: 'todo',
      priority: values.priority,
      dueDate: values.dueDate,
      category: values.category,
      createdAt: now,
      updatedAt: now,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Tasks</p>
        <h1>タスク管理</h1>
        <p>
          学習タスクや転職活動タスクを登録し、進捗を管理する画面になる予定です。
        </p>
      </div>

      <TaskForm onAddTask={handleAddTask} />

      {tasks.length > 0 ? (
        <div className="task-list" aria-label="タスク一覧">
          {tasks.map((task) => (
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
