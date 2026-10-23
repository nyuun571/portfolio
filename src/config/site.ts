/**
 * =============================================
 *  サイト設定ファイル
 *  ここを編集してポートフォリオをカスタマイズしてください
 * =============================================
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "twitter" | "email" | "zenn" | "qiita" | "linkedin" | "custom";
}

export interface Skill {
  name: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  // ── 基本情報 ────────────────────────────────────────
  /** 表示名 */
  name: "nyuun",
  /** ハンドル名 (SNSなど) */
  /** サイトタイトル (ブラウザタブに表示) */
  title: "Portfolio",
  /** サイト説明 (SEO用) */
  description: "nyuunのポートフォリオサイトです。つくったものとかブログとかを載せてます。",
  /** アバター画像パス (public/ ディレクトリ相対) */
  avatar: "/assets/my_icon.JPG",
  /** ヒーローのキャッチコピー */
  tagline: "",

  // ── 自己紹介 ────────────────────────────────────────
  /** About セクションの自己紹介文 */
  bio: "立命館大学(29卒)\n RiST所属\n いろいろなことに勉強中",

  /**
   * About セクションの「もっと詳しく」ボタンのリンク先。
   * 自己紹介ブログ記事を書いたら、そのスラッグに変更してください。
   * 例: "/blog/about-me"  →  src/content/blog/about-me.md に対応
   */
  introBlogHref: "/blog/about-me",

  // ── SNS リンク ───────────────────────────────────────
  /**
   * 表示したいリンクだけ有効にしてください。
   * icon は "github" | "twitter" | "email" | "zenn" | "qiita" | "linkedin" | "custom"
   * 順番を変えると表示順が変わります。
   */
  social: [
    {
      label: "GitHub",
      href: "https://github.com/nyuun571",
      icon: "github",
    },
    {
      label: "X",
      href: "https://twitter.com/nyuun571",
      icon: "twitter",
    },
    // 追加例:
    // { label: "Zenn",     href: "https://zenn.dev/yourusername",       icon: "zenn" },
    // { label: "Qiita",    href: "https://qiita.com/yourusername",      icon: "qiita" },
    // { label: "Email",    href: "mailto:your@email.com",               icon: "email" },
    // { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  ] as SocialLink[],

  // ── スキル ───────────────────────────────────────────
  /**
   * スキル一覧。category でグループ化して表示されます。
   * 自由に追加・削除・変更してください。
   */
  skills: [
    // ── 使ったことがある ──────────────────────────────────
    // 触ったことがある・勉強中のものを正直に書いてください
    // 自信がなくても「学習中」として載せることは全然OKです
    { name: "C", category: "使ったことがある" },
    { name: "HTML", category: "使ったことがある" },
    { name: "CSS", category: "使ったことがある" },
    { name: "JavaScript", category: "使ったことがある" },
    { name: "Astro", category: "使ったことがある" },
    { name: "Python", category: "使ったことがある" },
    { name: "Zig", category: "使ったことがある" },

    // ── 学習中 ─────────────────────────────────────────
    // 今まさに勉強していることを書いてください
    { name: "TypeScript", category: "学習中" },
    { name: "Rust", category: "学習中" },
    { name: "Go", category: "学習中" },

    // ── 興味がある ─────────────────────────────────────
    // いずれ触りたい・気になっている技術でOKです
    { name: "React", category: "興味がある" },
    { name: "Moonbit", category: "興味がある" },
  ] as Skill[],

  // ── ナビゲーション ────────────────────────────────────
  /** ヘッダーナビゲーションのリンク */
  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Works", href: "/works" },
  ] as NavLink[],
} as const;
