export interface Project {
  id: string; // 專案唯一識別碼 (slug)
  title: string; // 專案標題
  description: string; // 測試或展示用的簡短描述
  thumbnailUrl: string; // 專案縮圖預覽連結
  techStack: string[]; // 開發使用的技術堆疊
  demoUrl?: string; // Live Demo 網址
  repoUrl?: string; // GitHub 原始碼儲存庫網址
  isFeatured?: boolean; // 是否為精選專案
}

export interface Article {
  id: string; // GitHub Issue ID 或 Number
  slug: string; // 用於 URL 的自訂路徑
  title: string; // 文章標題
  excerpt: string; // 文章摘要
  coverImageUrl?: string; // 封面圖片 URL
  publishedAt: string; // ISO 日期字串
  updatedAt?: string; // ISO 日期字串
  tags: string[]; // 標籤分類
  content: string; // 解析後的 HTML 或 Markdown
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  experienceSummary: string;
  socialLinks: {
    resume: string;
    linkedin: string;
    github: string;
    email?: string;
  };
}
