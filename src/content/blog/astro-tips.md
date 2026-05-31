---
title: "Astro で始めるモダンな静的サイト構築"
description: "Astroの主要な機能を実際に使ってみて分かった、モダンな静的サイト構築のポイントをまとめます。"
pubDate: 2025-02-20
tags: ["Astro", "フロントエンド", "Web開発"]
featured: false
---

# Astro で始めるモダンな静的サイト構築

Astroを使い始めて数ヶ月経ちました。使ってみて分かった便利な機能や、つまずいたポイントをまとめます。

## コンテンツコレクションが便利すぎる

Astroのコンテンツコレクションを使うと、Markdownファイルを型安全に管理できます。

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

これだけで、フロントマターの型チェックが効くようになります。

## Islands Architecture を活用する

Astroの最大の特徴は **Islands Architecture** です。デフォルトではJavaScriptを全くクライアントに送りません。

インタラクティブなコンポーネントが必要なときだけ、`client:load` や `client:visible` ディレクティブを使います：

```astro
<!-- 画面に見えた時だけロード -->
<Counter client:visible />

<!-- ページロード時にすぐロード -->
<SearchBar client:load />
```

## レイアウトで共通部分をまとめる

ヘッダー・フッター・メタタグなどの共通部分はレイアウトにまとめるのがベストプラクティスです。

```astro
---
// src/layouts/BaseLayout.astro
const { title, description } = Astro.props;
---
<html lang="ja">
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

## まとめ

Astroは学習コストが低く、パフォーマンスも高い素晴らしいフレームワークです。特にポートフォリオやブログなど、コンテンツ中心のサイトに最適だと感じました。

次回は Astroのデプロイについて書く予定です。
