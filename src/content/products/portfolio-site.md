---
title: "このポートフォリオサイト"
description: "Astroで構築したポートフォリオサイト。ダークモード対応、コンテンツコレクション、アニメーション付きのモダンなデザイン。"
pubDate: 2025-01-15
category: "Webサイト"
tags: ["Astro", "TypeScript", "CSS", "ポートフォリオ"]
github: "https://github.com/yourusername/portfolio"
demo: "https://yoursite.com"
status: "completed"
featured: true
---

# このポートフォリオサイト

Astro フレームワークを使って構築した個人ポートフォリオサイトです。

## 主な機能

- **ダークモード / ライトモード** 対応（localStorage で設定保存）
- **ブログ機能**: Markdown で記事を管理するコンテンツコレクション
- **プロダクトページ**: 制作物の紹介・管理
- **スクロールアニメーション**: Intersection Observer API を使用
- **レスポンシブデザイン**: モバイルからデスクトップまで対応

## 技術スタック

- **フレームワーク**: Astro 6.x
- **言語**: TypeScript
- **スタイリング**: Vanilla CSS (CSS カスタムプロパティ)
- **コンテンツ管理**: Astro Content Collections
- **デプロイ**: Vercel / Netlify

## 工夫した点

サイトの設定を `src/config/site.ts` に集約することで、名前・SNSリンク・スキル一覧などをワンファイルで管理できるようにしました。コンテンツ追加は Markdown ファイルを置くだけで OK です。
