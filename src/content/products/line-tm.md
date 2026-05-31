---
title: "LINE 多機能Bot"
description: "Pythonで作ったLINEボット。LINEのチャットやGoogle Sheetsから時間割やタスクの管理ができます。"
pubDate: 2025-05-31
category: "ツール"
tags: ["Python", "LINE Bot", "Bot", "API", "ショートカット", "ラズパイ"]
github: "https://github.com/nyuun571/LINE__bot_time_manager"
status: "completed"
featured: false
---

# LINEで時間割を管理する

## 概要
　Pythonで作ったLINEボット。LINEのチャットからGoogle Sheetsにアクセスして時間割の管理ができます。raspberry piのcron jobやiPhoneのショートカットと組み合わせて、簡単に時間を指定した通知を設定できます。また、使用していない時間に、タスクなどを登録することもできます。

## 技術スタック (Tech Stack)
言語: Python 3.12
パッケージ管理: Poetry
Webフレームワーク: Flask 3.1.1
インフラ・ホスティング: Vercel
API・外部連携:
LINE Messaging API: Webhook処理、Reply/Pushメッセージ配信
Google Sheets API : gspread を使用したスプレッドシートの操作・管理
Apple Shortcuts (iPhoneショートカット): クライアント側での自動化トリガーおよびWebリクエスト送信
