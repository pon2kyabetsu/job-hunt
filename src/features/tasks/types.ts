export type TaskStatus = 'todo' | 'inProgress' | 'done'

export type TaskPriority = 'high' | 'medium' | 'low'

export type TaskCategory =
  | 'learning'
  | 'portfolio'
  | 'application'
  | 'interview'
  | 'document'

export type Task = {
  id: string
  title: string
  status: TaskStatus
  priority: TaskPriority
  dueDate: string | null
  category: TaskCategory
  createdAt: string
  updatedAt: string
}
