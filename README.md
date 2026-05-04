# Career Manager

Career Manager は、転職活動と学習タスクをまとめて管理するための Web アプリです。

応募企業、選考状況、日々の学習タスク、週次の振り返りを一元管理し、転職活動中に「次に何をするべきか」を把握しやすくすることを目的にしています。

## 作成目的

転職活動では、応募企業の進捗、面接準備、学習内容、振り返りメモが別々の場所に散らばりやすくなります。

このアプリでは、それらを 1 つの画面構成の中で整理し、学習と応募活動を継続しやすくすることを目指しています。

## 使用技術

- React
- TypeScript
- Vite
- React Router DOM
- CSS
- ESLint

## 現在実装済みの機能

- ログイン画面
- ログインボタン / デモログインボタンからダッシュボードへの遷移
- ログイン後の共通レイアウト
- ヘッダー
- サイドバー
- ダッシュボード画面
- タスク管理画面
- タスク一覧の仮データ表示
- タスク 1 件分を表示する TaskCard コンポーネント
- タスク追加フォームの UI
- 応募企業管理画面
- 振り返り画面
- 設定画面
- Not Found ページ
- レスポンシブ対応の土台

## 現時点で未実装の機能

- 実際の認証処理
- 認証ガード
- DB 連携
- API 通信
- フォーム入力内容の保存
- タスク追加処理
- タスクのステータス変更 / 削除 / 絞り込み
- 応募企業 / 振り返りデータの CRUD
- 本番用デプロイ設定

## 画面構成

| パス | 画面 | 内容 |
| --- | --- | --- |
| `/` | リダイレクト | `/dashboard` に遷移 |
| `/login` | ログイン画面 | メールアドレス、パスワード、ログインボタン、デモログインボタン |
| `/dashboard` | ダッシュボード | 今日やること、応募状況、直近のアクション |
| `/tasks` | タスク管理 | 仮データのタスク一覧とタスク追加フォームを表示する |
| `/companies` | 応募企業管理 | 応募企業や選考ステータスを管理する想定 |
| `/reflections` | 振り返り | 週次振り返りや学習ログを管理する想定 |
| `/settings` | 設定 | プロフィールやログアウトを置く想定 |
| `*` | Not Found | 存在しない URL の表示 |

## ディレクトリ構成

```text
src/
  components/
    Header.tsx
    Sidebar.tsx
  features/
    tasks/
      components/
        TaskCard.tsx
        TaskForm.tsx
      mockTasks.ts
      taskLabels.ts
      types.ts
  layouts/
    AppLayout.tsx
  pages/
    LoginPage.tsx
    DashboardPage.tsx
    TasksPage.tsx
    CompaniesPage.tsx
    ReflectionsPage.tsx
    SettingsPage.tsx
    NotFoundPage.tsx
  App.tsx
  App.css
  index.css
  main.tsx
```

## セットアップ

依存パッケージをインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

起動後、ブラウザで表示されたローカル URL にアクセスしてください。

## 開発用コマンド

```bash
npm run dev
```

開発サーバーを起動します。

```bash
npm run lint
```

ESLint でコードをチェックします。

```bash
npm run build
```

TypeScript の型チェックと本番用ビルドを実行します。

## 動作確認

この README 更新時点では、以下のコマンドが通ることを確認しています。

```bash
npm run lint
npm run build
```

## 今後実装予定

- README の継続的な更新
- タスク追加処理
- タスクのステータス変更 / 削除 / 絞り込み
- 応募企業一覧画面の作成
- 応募企業詳細画面の作成
- 選考ステータス管理
- 週次振り返り / 学習ログ管理
- 認証状態の管理
- DB / API 連携
- レスポンシブデザインの調整

## 開発メモ

現在は、画面遷移、共通レイアウト、タスク一覧表示、タスク追加フォームの UI を確認できる段階です。

認証処理や DB 連携はまだ実装せず、まずは仮データと React の状態管理でタスク管理機能の MVP を段階的に作る方針です。
