import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

// ── ブログコレクション ────────────────────────────────
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    /** 記事タイトル */
    title: z.string(),
    /** 記事の概要 (カード・OGPに使用) */
    description: z.string(),
    /** 公開日 */
    pubDate: z.coerce.date(),
    /** タグ一覧 */
    tags: z.array(z.string()).default([]),
    /** true にすると非公開 */
    draft: z.boolean().default(false),
    /** サムネイル画像パス (省略可) */
    thumbnail: z.string().optional(),
    /** トップに固定表示 */
    featured: z.boolean().default(false),
  }),
});

// ── Works コレクション ────────────────────────────────
// ※ ファイルは src/content/products/ に置いてください
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    /** タイトル */
    title: z.string(),
    /** 概要 */
    description: z.string(),
    /** 作成/公開日 */
    pubDate: z.coerce.date(),
    /** カテゴリー (例: "Webアプリ", "ツール", "ライブラリ") */
    category: z.string(),
    /** 技術スタックタグ */
    tags: z.array(z.string()).default([]),
    /** GitHub リポジトリURL (省略可) */
    github: z.string().optional(),
    /** デモサイトURL (省略可) */
    demo: z.string().optional(),
    /** サムネイル画像パス (省略可) */
    thumbnail: z.string().optional(),
    /** ステータス */
    status: z.enum(["completed", "wip", "archived"]).default("completed"),
    /** トップに固定表示 */
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, works };
