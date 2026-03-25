# 前期研究與技術探討 (Phase 0: Research)

本文件整理技術脈絡中所需解決的關鍵點，以及確定相關工具的最佳實踐。

## 1. 免費且易用的部落格 CMS 替代方案整合

**Decision**: 放棄 Notion + Google Drive，改用 **GitHub Issues** 作為部落格的輕量化 CMS 系統。利用 GitHub REST API 或 GraphQL 取得開啟狀態（或特定標籤）的 Issues 渲染成文章。

**Rationale**:

- **極致的開發者體驗 (DX)**：工程師非常熟悉 GitHub 介面，直接撰寫 Markdown 即可。

- **免費圖床原生支援**：在 GitHub Issue 中貼上圖片，GitHub 會自動將其上傳至 `user-images.githubusercontent.com` 且永久保存與公開存取，完美解決了圖片託管與 Notion/Google Drive 難用的跨域權限問題。

- **開箱即用的標籤與回覆**：可以使用 GitHub Labels 作為文章分類（例如 "前端", "AI"），甚至將 Issue 的留言作為部落格底下的回覆功能。

- **免費與高可用性**：不須額外伺服器或負擔費用。配合 Next.js ISR 快取，也不必擔心 GitHub API 存取頻率限制 (Rate Limit) 的問題。

**Alternatives considered**:

- **Notion + Google Drive**: 原本的方案，但由於 Notion API 對區塊 (Blocks) 的解析較繁瑣，且 Google Drive 圖片連結無法直接用作 `<img>` (需要做額外的網址轉換或引發跨域問題)，開發與撰寫體驗不佳。

- **本地端 MDX**: 將 `.mdx` 檔案直接放在專案原始碼中。優點是不需呼叫 API，缺點是每次發布新文章都需要透過 Git Commit 部署，且圖片需要手動壓縮放進 `public` 資料夾，不若 GitHub Issue 貼圖來得直覺快速。綜合考量，GitHub Issues 是最靈活輕量的解法。

## 2. TDD 與 Vitest 的整合

**Decision**: 使用 `vitest` 搭配 `@testing-library/react` 進行元件測試。測試檔統一放至 `/tests` 資料夾層次。開發新邏輯與元件前必定先建立測試。

**Rationale**:

- Vite/Vitest 效能優異，與 React 19 相容性極佳，且設定相較於 Jest 更為簡潔，速度夠快能支撐高頻的 TDD 循環。

**Alternatives considered**: Jest。因 Next.js 原生支援 Jest 但速度較慢，目前更傾向高效能的 Vitest。

## 3. 狀態管理 Zustand 與 App Router 的權衡

**Decision**: 雖然依據需求引入 Zustand，但在 App Router (React Server Components) 架構下，應盡可能讓資料在 Server 獲取並透過 Props 傳遞。Zustand 僅限用於 Client-side 的全域狀態（例如深色模式切換、或者是跨多層級的篩選器狀態）。

**Rationale**:

- 以免破壞 RSC 的高效能特性（將元件轉為 `"use client"` 會增加 bundle size）。遵循「防止過度設計」原則，非必要不使用 Zustand。
