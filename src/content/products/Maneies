---
title: "Maneies LINE 収支管理 Bot"
description: "Goで作ったLINEボット。個人・グループチャットをリンクして活用できる。"
pubDate: 2025-06-24
category: "ツール"
tags: ["Go", "SQLite", "LINE Bot", "ラズパイ"]
github: "https://github.com/nyuun571/Maneies"
status: "completed"
featured: true
---

## Maneies — LINE 収支管理 Bot


### 概要

LINE のトークルームに追加するだけで、個人・グループの収支を記録・集計できる Bot。
外部サービスへの依存を最小限に抑え、Go 標準ライブラリ + SQLite のみで動作する。

### 主な機能

- **収支記録** — 収支を入力することで、データを追加
- **月次・全期間集計** — カテゴリ別の収支サマリーをテキストで返信
- **申請・承認フロー** — 個人チャットからグループへ申請し、承認者が LINE の引用機能で受理・却下
- **グループ同期** — グループの記録を個人収支に自動ミラーリングする設定
- **メンバー別集計** — グループ内の支出をメンバーごとに集計

### 技術的なポイント

- フレームワーク不使用。`net/http` のみで Webhook サーバーを実装
- SQLite の WAL モード + `SetMaxOpenConns(1)` で並行書き込みを安全に制御
- LINE の「引用メッセージ」機能を活用し、承認操作を直感的な UX で実現
- `parser` パッケージで入力テキストをバリデーション付きでパース（最大金額・文字数チェック）

### リンク
- (LINE アカウント)[https://lin.ee/ZSe3npR]

**技術スタック:** Go / SQLite / LINE Messaging API
