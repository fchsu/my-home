---
description: "前端工程師專業個人基地之任務清單"
---

# 任務清單：前端工程師專業個人基地 (Frontend Portfolio)

**輸入來源**：設計文件皆取自 `/specs/001-frontend-portfolio/`
**前置需求**：plan.md (必備), spec.md (使用者故事必備), research.md, data-model.md

**測試**：依據 TR-001 測試需求，以下包含 TDD (單元測試) 與 Playwright (E2E) 之自動化相關任務。

**結構組織**：任務根據使用者故事進行分組，確保每個故事皆能獨立實作與驗證。

## 格式規範：`[任務編號] [P?] [故事標籤] 任務描述與檔案路徑`

- **[P]**：代表該任務可平行處理 (修改不同檔案，無相依阻礙)。
- **[故事標籤]**：該任務所屬之使用者故事 (例如：US1、US2、US3)。
- 描述內需包含精確的檔案路徑。

## 路徑慣例

- **Web 應用程式**：所有開發皆於專案根目錄下的 `src/` 與 `tests/` 進行。

---

## 階段 1：基礎專案建置 (Setup & Shared Infrastructure)

**目的**：專案初始化與建立基礎目錄結構。

- [x] T001 在專案根目錄與 `package.json` 初始化 Next.js App Router 專案，並配置 TypeScript 與 TailwindCSS。
- [x] T002 在 `.eslintrc.js` 與 `.prettierrc` 設置 ESLint 與 Prettier 以鞏固程式碼品質。
- [x] T003 在 `components.json` 與 `src/components/ui/` 設置 shadcn-ui 並安裝基礎元件 (按鈕、卡片等)。
- [x] T004 在 `src/store/index.ts` 建立 Zustand 狀態管理架構。
- [x] T005 [P] 在 `vitest.config.ts` 建構 Vitest 單元測試環境。
- [x] T006 [P] 在 `playwright.config.ts` 建構 Playwright E2E 測試環境。

---

## 階段 2：核心基底建置 (Foundational & Blocking Prerequisites)

**目的**：在進行任何使用者故事前，必須先建立的核心架構。

**⚠️ 極度重要**：此階段未完成前，不可進行其他使用者故事之開發。

- [x] T007 在 `src/lib/github/api.ts` 建立通用的 GitHub API 串接公用程式。
- [x] T008 [P] 在 `src/lib/cache.ts` 配置全域的 ISR 快取機制。
- [x] T009 [P] 在 `src/types/index.ts` 定義基礎的 TypeScript 型別介面 (專案 Project、文章 Article、個人簡介 Profile)。
- [x] T010 在 `src/app/layout.tsx` 實作標準 SEO 排版元件 (包含共用的標頭與頁腳)。

**檢核點**：核心基底已就緒，現在可開始平行開發使用者故事。

---

## 階段 3：使用者故事 1 - 專業個人檔案與連結 (優先級: P1) 🎯 最簡可行產品 (MVP)

**目標**：呈現工程師專業背景、摘要及對外專業連結（履歷、LinkedIn、GitHub）。

**獨立驗證**：進入首頁並確認個人檔案區塊正確顯示，且能成功向外導航。

### User Story 1 之自動化測試

- [x] T011 [P] [US1] 建立 Playwright E2E 測試，針對個人簡介之使用者互動路徑於 `tests/e2e/profile.spec.ts` 撰寫測試案例。
- [x] T012 [P] [US1] 在 `tests/unit/portfolio/ProfileHero.test.tsx` 為 ProfileHero 元件撰寫 Vitest 單元測試。

### User Story 1 之開發實作

- [x] T013 [P] [US1] 在 `src/lib/data/profile.ts` 建立靜態的 `Profile` 模擬資料實體。
- [x] T014 [US1] 在 `src/components/portfolio/ProfileHero.tsx` 實作 `ProfileHero` React 元件。
- [x] T015 [US1] 將 `ProfileHero` 元件整合至首頁路由 `src/app/page.tsx`。
- [x] T016 [US1] 執行 Vitest 與 Playwright 測試，驗證針對 User Story 1 之所有實作皆順利通過且符合預期。

**檢核點**：至此，使用者故事 1 已可獨立運作及測試。

---

## 階段 4：使用者故事 2 - 作品集展示 (優先級: P1)

**目標**：視覺化展示開發過的 side project 及其技術堆疊，並明確引導至 GitHub Repo 或 Live Demo。

**獨立驗證**：在畫面上找到作品集區塊，確認每一張專案卡片資訊無誤且向外連結功能正常。

### User Story 2 之自動化測試

### User Story 2 之自動化測試

- [x] T017 [P] [US2] 建立 Playwright E2E 測試，於 `tests/e2e/projects.spec.ts` 模擬專案連結的點擊路徑。
- [x] T018 [P] [US2] 於 `tests/unit/portfolio/ProjectCard.test.tsx` 為 `ProjectCard` 撰寫 Vitest 單元測試。

### User Story 2 之開發實作

- [x] T019 [P] [US2] 在 `src/lib/data/projects.ts` 建立靜態的 `Project` 物件陣列。
- [x] T020 [US2] 於 `src/components/portfolio/ProjectCard.tsx` 實作子元件 `ProjectCard`。
- [x] T021 [US2] 於 `src/components/portfolio/ProjectList.tsx` 實作容器元件 `ProjectList`。
- [x] T022 [US2] 將 `ProjectList` 整合進首頁佈局 `src/app/page.tsx` 中。
- [x] T023 [US2] 執行 Vitest 與 Playwright 測試，驗證針對 User Story 2 之所有實作皆順利通過。

**檢核點**：至此，使用者故事 1 與 2 皆可獨立且正常運作。

---

## 階段 5：使用者故事 3 - 技術部落格 (優先級: P2)

**目標**：瀏覽並閱讀技術文章清單 (包含前端開發、AI 等標籤分類) 及檢視單篇文章內容。

**獨立驗證**：切換至 `/blog` 路由，確保摘要清單順利載入；點選單篇文章能正確跳轉至 `/blog/[slug]`。

### User Story 3 之自動化測試

- [ ] T024 [P] [US3] 在 `tests/e2e/blog.spec.ts` 建立 Playwright E2E 測試，模擬部落格內部的導航。
- [ ] T025 [P] [US3] 於 `tests/unit/blog/articles.test.ts` 建立擷取 GitHub API 與元件渲染之 Vitest 單元測試。

### User Story 3 之開發實作

- [ ] T026 [P] [US3] 在 `src/lib/github/articles.ts` 實作 GitHub Issues 解析邏輯並回傳 `Article[]`。
- [ ] T027 [P] [US3] 於 `src/components/blog/MarkdownRenderer.tsx` 建構客製化之 MDX/Markdown 渲染器元件。
- [ ] T028 [US3] 在 `src/components/blog/ArticleCard.tsx` 建立 `ArticleCard` 預覽圖文卡片元件。
- [ ] T029 [US3] 於 `src/app/blog/page.tsx` 建立部落格統整列表之視圖與迴圈邏輯。
- [ ] T030 [US3] 於 `src/app/blog/[slug]/page.tsx` 實作動態獲取文章內容之單獨頁面。
- [ ] T031 [US3] 執行 Vitest 與 Playwright 測試，驗證針對 User Story 3 之所有實作皆順利通過。

**檢核點**：所有使用者故事皆已個別開發完畢。

---

## 階段 6：無頭 CMS 整合 (Headless CMS Integration - Private Repo)

**目的**：將寫死 (Hardcoded) 於專案內的靜態個人資訊與作品集資料，全面轉移至私有 Repository 進行抓取，實踐 Dual-Repo 隱私保護架構。

- [ ] T032 [P] 建立額外的私有 GitHub Repository 以做為資料庫使用，並在 `.env` 與設定檔配置對應之 `GITHUB_TOKEN` 與 Repo 名稱變數。
- [ ] T033 擴充 `src/lib/github/api.ts` 的功能，實作通用函數以抓取指定 Label (例如 `type:profile` 或 `type:project`) 的 Issues。
- [ ] T034 [P] 以 GitHub API 取代 `src/lib/data/profile.ts`，改為動態抓取私密 Repo Issue 內的 Profile 資料。
- [ ] T035 [P] 以 GitHub API 取代 `src/lib/data/projects.ts`，改為動態抓取私密 Repo Issue 內的 Projects 陣列資料。
- [ ] T036 執行 Vitest 與 Playwright 測試，確認在替換為 CMS 資料來源後，首頁 (US1, US2) 的渲染與 E2E 測試皆能成功通過。

---

## 階段 7：修潤與跨領域項目 (Polish & Cross-Cutting Concerns)

**目的**：涵蓋與改善影響範圍超過單一使用者故事之系統項目。

- [ ] T037 [P] 於 `src/app/globals.css` 中透過 TailwindCSS 強化跨平台之行動裝置響應式設計。
- [ ] T038 於 `src/app/page.tsx` 及 `src/app/blog/[slug]/page.tsx` 注入動態之 SEO Meta 標籤。
- [ ] T039 在所有頁面針對 Next.js 圖片與字型載入進行最佳化調整。
- [ ] T040 驗證 `quickstart.md` 之所有指令是否能在本地端順利執行無誤。

---

## 開發相依性與執行順序原則

### 階段相依性

- **基礎專案建置 (階段 1)**：無任何相依，可立即著手進行。
- **核心基底建置 (階段 2)**：相依於階段 1 之設定，且為後續所有使用者故事之**阻塞點 (BLOCKS)**。
- **使用者故事 (階段 3, 4, 5)**：相依於核心基底建置，實作時先使用靜態 Mock 資料。
- **無頭 CMS 整合 (階段 6)**：必須在基礎使用者故事 (US1, US2, US3) 的 UI 架構與單元測試都完成後，再抽換資料來源。
- **修潤與完善 (最終階段)**：需待排定的開發項目全數完工後方能徹底執行。

### 平行開發機會探討

- 單元測試套件與 E2E 測試環境的初始化可並行。
- 資料公用函式 (例如：`src/lib/github/*`) 以及通用 TypeScript 類別定義可先行脫鉤建制。
- 專案展示用的假資料模型與測試腳本均能在實作前端 UI 的當下作平行開發。
