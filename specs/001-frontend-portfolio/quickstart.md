# 本地端啟動指南 (Quickstart)

這份文件說明如何將 `001-frontend-portfolio` 專案在本地環境中順利運行。

## 系統需求

- Node.js >= v22.0.0 (建議使用最新的 v22.x LTS 或以上版本)
- 套件管理員：`pnpm` (或 `npm`/`yarn`，視後續初始化決策而定，本專案推薦使用 `pnpm` 以獲取最佳效能)
- Git

## 1. 取得程式碼

```bash
git clone <repository_url>
cd my-home
git checkout 001-frontend-portfolio
```

## 2. 安裝依賴

```bash
pnpm install
```

## 3. 環境變數設定

複製環境變數範例檔，並填入您的 GitHub API Token。

```bash
cp .env.example .env.local
```

`.env.local` 所需變數範例：

```env
# GitHub API 設定 (用以讀取 GitHub Issues 作為部落格)
GITHUB_TOKEN=your_personal_access_token_here

# 其他金鑰...
```

## 4. 啟動開發伺服器 (TDD 與本機開發)

**啟動 Vitest 測試監聽模式** (依照 TDD 流程，開發前請開啟此終端機)：

```bash
pnpm test:watch
# 或 npm run test:watch
```

**啟動 Next.js 網頁伺服器**：

```bash
pnpm dev
# 或 npm run dev
```

接著在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 即可查看結果。

## 5. 程式碼品質檢查

在建立 PR 前，請務必執行過 Lint 與 Type Check：

```bash
pnpm lint
pnpm type-check
pnpm test
```
