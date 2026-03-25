# Implementation Plan: 前端工程師專業個人基地 (Frontend Portfolio)

**Branch**: `001-frontend-portfolio`  
**Date**: 2026-03-07  
**Spec**: [spec.md](../specs/001-frontend-portfolio/spec.md)  
**Input**: Feature specification from `/specs/001-frontend-portfolio/spec.md`

## 總結 (Summary)

建立一個具備專業品牌感的前端工程師個人網站，主要呈現三大核心內容：個人工作經驗與專業連結、自製 side project 展示（引導至 GitHub 或 Live Demo），以及技術部落格。將嚴格執行規格驅動開發 (SDD) 與測試驅動開發 (TDD)，以確保專案品質。

## 技術脈絡 (Technical Context)

**Language/Version**: TypeScript / Node.js (>= v22)  
**Primary Dependencies**:

- 核心框架：React v19, Next.js (App router)
- 樣式與 UI：tailwindcss, shadcn-ui
- 狀態管理：Zustand

**Storage**: GitHub Issues API (作為技術部落格的 CMS 與免費圖片空間)  
**Testing**: vitest (作為 TDD 的核心測試工具，搭配 `@testing-library/react`)  
**Target Platform**: Web 瀏覽器 (RWD 支援行動裝置與桌機)  
**Deployment**: Vercel  
**Project Type**: Web Application (個人網站/SSG/ISR)  
**Performance Goals**: 頁面載入時間小於 1.5 秒，Lighthouse 雙平台分數 90+  
**Constraints**:

- 必須遵循嚴格的 TDD 與 SDD 流程。
- 無外部 DB，依賴 GitHub Issues 作為 CMS，須處理 API 快取 (Cache) 或 ISR 來確保高頻效能與避免 Rate Limit。

## Constitution Check (憲章檢核)

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **I. 高程式碼品質**: 將採用 ESLint, Prettier 進行管控，並確保模組化設計。
- **II. 測試驅動開發 (TDD)**: 已納入 vitest，並在任務中規範先寫測試。
- **III. 使用者體驗一致性**: 使用 shadcn-ui 提供一致的設計系統與元件庫。
- **IV. 高效能表現**: 利用 Next.js App Router 的 React Server Components (RSC) 及 ISR 提升效能。
- **V. 正體中文及台灣習慣用語**: 所有文件與程式碼註解依照此規範。
- **VI. 標示技術債**: 程式內預留 `TODO(TechDebt):` 等標記機制。
- **VII. 最小可行性產品 (MVP)**: 初期僅實作列表展示與基本連結，不開發過度複雜的動畫或互動。
- **VIII. 防止過度設計**: 狀態管理雖然選用 Zustand，但只在跨元件真的需要共享狀態時使用，盡可能依賴 RSC。

## 專案結構 (Project Structure)

### Documentation (this feature)

```text
specs/001-frontend-portfolio/
├── plan.md              # 此檔案
├── research.md          # 針對技術架構與 GitHub Issues API 整合的實踐探討
├── data-model.md        # 專案與文章資料模型
├── quickstart.md        # 本地端啟動文件指南
└── tasks.md             # 執行任務清單 (由 /speckit.tasks 指令產生)
```

### Source Code (repository root)

```text
src/
├── app/                  # Next.js App Router 頁面與路由
│   ├── layout.tsx
│   ├── page.tsx          # 首頁 (個人簡介、連結、作品集區塊)
│   └── blog/             # 部落格路由
│       ├── page.tsx      # 文章列表
│       └── [slug]/page.tsx # 單篇文章內容
├── components/           # UI 元件與共用組件 (含 shadcn-ui)
│   ├── ui/               # shadcn-ui 基礎元件
│   ├── portfolio/        # 作品集相關元件
│   └── blog/             # 部落格相關元件
├── lib/                  # 包含 GitHub Issues API 整合、工具函式
├── store/                # Zustand 狀態管理 (如有必要)
└── types/                # TypeScript 型別定義

tests/
├── unit/                 # Vitest 單元測試 (TDD 主要執行區域)
└── integration/          # 整合測試
```

**Structure Decision**: 採用單一專案結構 (Next.js 原生推薦的 src 目錄架構)，將測試檔獨立至根目錄下的 `tests` 資料夾以便於 TDD 流程管理。

## 複雜度追蹤 (Complexity Tracking)

> **Fill ONLY if Constitution Check has violations that must be justified**

無違反憲章之項目。所有技術選型皆因應高強度的前端架構並具備合理性。
