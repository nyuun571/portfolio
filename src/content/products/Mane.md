    ---
    title: "Maneies (LINE 収支管理 Bot)"
    description:
  "LINEの個人・グループチャットで収支を記録し、自動同期や承認フローを行えるGo言語製の家計簿Botです。"
    pubDate: 2026-06-24
    category: "ツール"
    tags: ["Go", "SQLite", "LINE Bot", "Bot", "API"]
    github: "https://github.com/nyuun571/Maneies"
    status: "completed"
    featured: false
    ---

    ### 概要

    LINE のトークルームに追加するだけで、個人・グループの収支を記録・集計できる Bot。
    外部サービスへの依存を最小限に抑え、Go 標準ライブラリ + SQLite のみで動作する。

    ### 主な機能

    - **収支記録** — コマンド（`/支出`・`/収入`）またはフリーテキストで入力
    - **月次・全期間集計** — カテゴリ別の収支サマリーをテキストで返信
    - **申請・承認フロー** — 個人チャットからグループへ申請し、承認者が LINE の引用機能で受理・却下
    - **グループ同期** — グループの記録を個人収支に自動ミラーリングする設定
    - **メンバー別集計** — グループ内の支出をメンバーごとに集計

    ### 技術的なポイント

    - フレームワーク不使用。`net/http` のみで Webhook サーバーを実装
    - SQLite の WAL モード + `SetMaxOpenConns(1)` で並行書き込みを安全に制御
    - `DBTX` インターフェースで `*sql.DB` / `*sql.Tx` を透過的に扱い、将来のトランザクション対応を容易に
    - LINE の「引用メッセージ」機能を活用し、承認操作を直感的な UX で実現
    - `parser` パッケージで入力テキストをバリデーション付きでパース（最大金額・文字数チェック）

    ### システム構成図

    #### 申請・承認シーケンス

  グループ決済時のフローです。LINEの「引用返信」をUXに組み込むことで、申請IDの手入力を省き、直感的な承認操作を実
  現しています。

    ```mermaid
    sequenceDiagram
        actor Requester as 申請者
        participant Bot
        actor Approver as 承認者
        participant DB as SQLite DB

        Requester->>Bot: /申請 家族 支出 食費 800
        Bot->>DB: 申請データ保存 (status: pending)
        Bot->>Approver: Push通知 (申請内容 + 引用の案内)
        Note over Approver: 通知メッセージを<br/>引用して返信
        Approver->>Bot: /受理
        Bot->>DB: 申請ステータス更新 (status: approved)
        Bot->>DB: グループ支出として記録
        alt 同期設定ONの場合
            Bot->>DB: 個人の支出としても記録
        end
        Bot->>Requester: 承認完了のPush通知

  #### データベース設計 (ER図)

  グループごとの承認者や、個人とグループの同期設定を管理するシンプルなリレーショナル構造を採用しています。

    erjiagram
        group_configs {
            string user_id PK
            string group_id PK
            string group_name
            boolean sync_personal "個人の収支に同期するか"
        }
        expenses {
            int id PK
            string user_id
            date date
            string category
            int amount
            string type "expense/income"
        }
        group_expenses {
            int id PK
            string group_id
            string user_id
            date date
            string category
            int amount
            string type
        }
        pending_requests {
            int id PK
            string group_id
            string requester_id
            int amount
            string status "pending/approved/rejected"
            string bot_message_id "承認用通知のID"
        }
        group_approvers {
            string group_id PK
            string user_id "承認者のID"
        }

        group_configs ||--o{ expenses : "同期設定がONなら記録"
        pending_requests }|--|| group_approvers : "承認者へPush通知"

  ### リンク

  • リポジトリ:  Maneies/
