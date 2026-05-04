export type TaskStatus = 'todo' | 'inProgress' | 'done'

export type TaskPriority = 'high' | 'medium' | 'low'

export type TaskCategory =
  | 'learning'
  | 'portfolio'
  | 'application'
  | 'interview'
  | 'document'

// MVPでは詳細ページを持たないため、一覧表示と追加操作に必要な項目だけを含める。
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

// フォームでは、idや作成日時などの自動生成する項目を扱わず、ユーザーが入力する項目だけを渡す。
export type TaskFormValues = {
  title: string
  priority: TaskPriority
  dueDate: string | null
  category: TaskCategory
}
