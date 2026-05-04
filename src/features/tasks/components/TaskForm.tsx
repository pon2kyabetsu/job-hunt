import type { FormEvent } from 'react'
import { useState } from 'react'

import { taskCategoryLabels, taskPriorityLabels } from '../taskLabels'
import type { TaskCategory, TaskPriority } from '../types'

const taskPriorityOptions: TaskPriority[] = ['high', 'medium', 'low']

const taskCategoryOptions: TaskCategory[] = [
  'learning',
  'portfolio',
  'application',
  'interview',
  'document',
]

export function TaskForm() {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState<TaskPriority>('medium')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState<TaskCategory>('learning')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // 追加処理は次のIssueで実装するため、今回はフォーム入力だけを確認できる状態にする。
  }

  return (
    <section className="task-form-panel" aria-labelledby="task-form-title">
      <div className="task-form-heading">
        <h2 id="task-form-title">タスクを追加</h2>
        <p>次に取り組む行動を、まずは入力できる形にします。</p>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <div className="task-form-grid">
          <label className="form-field" htmlFor="task-title">
            タイトル
            <input
              id="task-title"
              name="title"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="例: React Routerを復習する"
              type="text"
              value={title}
            />
          </label>

          <label className="form-field" htmlFor="task-priority">
            優先度
            <select
              id="task-priority"
              name="priority"
              onChange={(event) =>
                setPriority(event.target.value as TaskPriority)
              }
              value={priority}
            >
              {taskPriorityOptions.map((option) => (
                <option key={option} value={option}>
                  {taskPriorityLabels[option]}
                </option>
              ))}
            </select>
          </label>

          <label className="form-field" htmlFor="task-due-date">
            期限
            <input
              id="task-due-date"
              name="dueDate"
              onChange={(event) => setDueDate(event.target.value)}
              type="date"
              value={dueDate}
            />
          </label>

          <label className="form-field" htmlFor="task-category">
            カテゴリ
            <select
              id="task-category"
              name="category"
              onChange={(event) =>
                setCategory(event.target.value as TaskCategory)
              }
              value={category}
            >
              {taskCategoryOptions.map((option) => (
                <option key={option} value={option}>
                  {taskCategoryLabels[option]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="task-form-actions">
          <button className="primary-button" type="submit">
            追加
          </button>
        </div>
      </form>
    </section>
  )
}
