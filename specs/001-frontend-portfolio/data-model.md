# 資料模型 (Data Model): 前端工程師專業個人基地

本文件定義專案內會使用到的核心資料結構。由於本專案不連接傳統關聯式資料庫，主要依賴靜態配置與 GitHub API，因此這裡定義的是應用程式內的 TypeScript 介面 (Interfaces)。

## 1. Project (作品集專案)

代表展示在前端作品集區塊的一個完成項目。這些資料初期可直接定義於靜態 JSON 或常數陣列中，未來若有需要亦可移至 Notion 中管理。

```typescript
interface Project {
  id: string; // 專案唯一識別碼 (slug)
  title: string; // 專案標題
  description: string; // 測試或展示用的簡短描述 (約 1-2 句話)
  thumbnailUrl: string; // 專案縮圖預覽連結
  techStack: string[]; // 開發使用的技術堆疊 (例如：["React", "Next.js", "TailwindCSS"])
  demoUrl?: string; // Live Demo 網址 (選填)
  repoUrl?: string; // GitHub 原始碼儲存庫網址 (選填)
  isFeatured?: boolean; // 是否為精選專案 (顯示在首頁最前排)
}
```

**驗證規則**:

- `demoUrl` 與 `repoUrl` 至少需提供一者，以符合「明確引導至 GitHub Repo 或 Live Demo」的要求。
- `techStack` 至少包含一項。

## 2. Article (部落格貼文)

代表透過 GitHub Issues API 抓取回來，並在前端展示的文章資料。

```typescript
interface Article {
  id: string; // GitHub Issue ID 或 Number
  slug: string; // 用於 URL 的自訂路徑 (例如：my-first-post)
  title: string; // 文章標題
  excerpt: string; // 文章摘要 (用於列表預覽)
  coverImageUrl?: string; // 封面圖片 URL (Google Drive 或其他圖片來源)
  publishedAt: string; // ISO 日期字串 (發布日期)
  updatedAt?: string; // ISO 日期字串 (最後更新日期)
  tags: string[]; // 標籤分類 (例如：["前端開發", "AI 應用"])
  content: string; // 解析後的 HTML 或 Markdown 文章內容字串
}
```

**狀態轉換機制**:

- 文章發布狀態：在 GitHub Repo 中，僅抓取特定 Label 是 `Status: Published` 的 Issues 作為正式發布的文章。

## 3. Profile (個人簡介)

工程師的核心專業資訊，通常以靜態檔維護。

```typescript
interface Profile {
  name: string; // 姓名
  role: string; // 核心身分 (例如："Frontend Engineer")
  bio: string; // 自我介紹摘要
  experienceSummary: string; // 工作經驗摘要
  socialLinks: {
    resume: string; // 履歷連結 (如 PDF 檔案連結或線上閱覽網址)
    linkedin: string; // LinkedIn 首頁連結
    github: string; // GitHub 首頁連結
    email?: string; // 聯絡 Email
  };
}
```
