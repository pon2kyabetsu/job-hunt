import type { TaskCategory, TaskPriority, TaskStatus } from './types'

// Taskの内部値と画面表示用の日本語ラベルを分け、今後のフォームや絞り込みでも同じ文言を使えるようにする。
export const taskStatusLabels: Record<TaskStatus, string> = {
  todo: '未着手',
  inProgress: '進行中',
  done: '完了',
}

export const taskPriorityLabels: Record<TaskPriority, string> = {
  high: '高',
  medium: '中',
  low: '低',
}

export const taskCategoryLabels: Record<TaskCategory, string> = {
  learning: '学習',
  portfolio: 'ポートフォリオ',
  application: '応募',
  interview: '面接対策',
  document: 'ドキュメント',
}
