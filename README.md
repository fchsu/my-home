# 👨‍💻 我的前端作品集 & 部落格 (Frontend Portfolio) (WIP)

這是我用來建立個人品牌的前端基地，主要是用來放履歷、平時寫的 Side Project，還有技術部落格。整個專案跑的是 SDD 跟 TDD 流程，算是對自己在開發品質上的一個要求。

## 🚀 專案亮點

1. **履歷與個人簡介**: 首頁一進來就能看到我的工作經歷，還有常駐的 LinkedIn、GitHub 連結，方便大家交流。
2. **作品集**: 放了幾個我自己開發的 Side Project，上面會有用到的技術標籤，也有直接連到 GitHub Repo 或 Live Demo 的按鈕供參考。
3. **技術部落格**: 這邊比較特別，我是拿 GitHub Issues 來當 Headless CMS，主要會寫些前端或是 AI 相關的技術心得。

## 🛠 用了哪些技術

- **核心**: React v19 + Next.js v16 (App Router)
- **語言**: TypeScript / Node.js (建議 >= v22)
- **樣式與 UI**: Tailwind CSS + shadcn/ui
- **狀態管理**: Zustand (基本上只有跨元件真的有需要才會拿出來用)
- **測試**: Vitest (寫 Unit/Integration Test), Playwright (拿來跑 E2E)
- **部署**: 丟給 Vercel

## 🏗 架構設計小巧思

**雙 Repo 玩 Headless CMS**  
為了不要把個資或私密文章直接寫死在公開的 code 裡面，我另外弄了一個 **Private Repo**。網站的資料（像是個人簡歷、作品列表、部落格文章）其實都是透過 API 去那個獨立的 Repo 抓 Issues 回來呈現的。這樣專案開源的同時又能兼顧隱私。

---

## 💻 想跑在自己電腦上嗎？ (Quickstart)

### 首先你電腦要有...

- Node.js >= v22.0.0
- `pnpm` (強烈推薦)
- Git

### 1. 把 Code 抓下來並安裝套件

```bash
git clone <repository_url>
cd my-home
git checkout main
pnpm install
```

### 2. 設定環境變數

記得複製一份範例檔，然後填上你的 GitHub API Token，這樣才抓得到 Issues 裡的資料：

```bash
cp .env.example .env.local
```

### 3. 把 Server 跑起來

如果你想順便體驗一下這專案的 TDD 流程，建議可以開兩個 Terminal：

```bash
# 終端機 1：這邊開著讓 Vitest 在背景跑測試
pnpm test:watch

# 終端機 2：這邊把 Next.js 跑起來
pnpm dev
```

然後打開 [http://localhost:3000](http://localhost:3000) 就能看到了。

### 4. 推 Code 前的例行公事

為了確保程式碼品質，建議發 PR 或推 code 之前跑一下這幾個指令，確定格式跟測試都沒壞：

```bash
pnpm lint
pnpm type-check
pnpm test
```
