<!--
SYNC IMPACT REPORT
Version change: 1.0.0 -> 1.1.0
Modified principles:
  - Replaced template principles with 8 explicitly requested core principles.
Added sections:
  - I. 高程式碼品質 (High Code Quality)
  - II. 測試驅動開發 (Test-Driven Development, TDD)
  - III. 使用者體驗一致性 (Consistent User Experience)
  - IV. 高效能表現 (High Performance)
  - V. 註解一律使用正體中文且台灣習慣用語 (Comments in Traditional Chinese with Taiwan usage)
  - VI. 明確標示技術債 (Explicit Technical Debt Marking)
  - VII. 最小可行性產品 (Minimum Viable Product, MVP)
  - VIII. 防止過度設計 (Prevent Overdesign)
Removed sections:
  - Placeholder principles and generic sections
Templates requiring updates:
  - None: Current templates (plan, spec, tasks) rely on external application of these principles rather than hardcoded compliance checks. ✅
-->

# My Home Constitution

## Core Principles

### I. 高程式碼品質 (High Code Quality)

專案的程式碼必須保持高可讀性、高維護性與低耦合。應遵循良好的設計模式及最佳化實踐，確保程式碼結構清晰且易於團隊協作。

### II. 測試驅動開發 (Test-Driven Development, TDD)

所有新功能的開發皆須遵循 TDD 原則：先撰寫測試（確保測試最初會失敗），再實作滿足該測試的最小程式碼，最後進行重構。測試為確保系統穩定的第一道防線，絕不可輕忽。

### III. 使用者體驗一致性 (Consistent User Experience)

無論是在介面設計、操作流程還是系統回饋上，皆須保持高度一致性。新功能的加入不得破壞既有的使用者習慣，應提供直覺且統一的操作體驗。

### IV. 高效能表現 (High Performance)

系統架構與實作細節皆須考量效能表現。在不影響程式碼可讀性的前提下，應盡可能優化資源消耗與回應時間，以應付各種規模的使用場景。

### V. 註解與 Markdown 文件一律使用正體中文且台灣習慣用語

為確保團隊內部溝通無礙，專案內的程式碼註解以及所有 `.md` 文件（包含技術文件、規格書、實作計畫與任務清單等）一律使用正體中文撰寫，並嚴格遵循台灣當地的習慣用語（例如：專案、執行、佈署、套件等）。(若此項與外部通用指令規範有衝突，在此專案範圍內以此規則為準)。

### VI. 明確標示技術債 (Explicit Technical Debt Marking)

開發過程中若因時程或其他因素產生技術債，必須在程式碼中使用特定的註解前綴（例如 `TODO(TechDebt):` 或 `FIXME(TechDebt):`）明確標明，並簡述產生原因與後續重構建議，以便未來追蹤處理。

### VII. 最小可行性產品 (Minimum Viable Product, MVP)

任何新功能與系統設計應以最快達到「可用且具備核心價值」的狀態為首要目標。先推出簡潔的 MVP 版本，再依據真實反饋逐步迭代，避免閉門造車以及不必要的時間浪費。

### VIII. 防止過度設計 (Prevent Overdesign)

設計系統與架構時，應嚴守 YAGNI (You Aren't Gonna Need It) 原則。僅針對當前明確存在的需求進行實作，避免為了「未來可能發生」的情境預留過多不必要的抽象層或複雜程度，保持「剛好夠用」的極簡風格。

## 治理規範 (Governance)

- 所有 Pull Requests (PRs) 與程式碼變更皆須嚴格遵守上述 8 項核心原則。
- 專案內所有技術文件、規格書、憲章與相關紀錄文件的撰寫，一律使用正體中文並符合台灣當地的習慣用語。
- 任何架構上的決策或偏離核心原則的實作，皆須具備充分理由並以書面形式明確記錄。
- 本憲章的效力凌駕於其他非正式的程式碼開發慣例。若需修訂這些原則，必須具備相關文件說明、取得團隊共識，並進行版本號的更新。

**Version**: 1.1.0 | **Ratified**: 2026-03-05 | **Last Amended**: 2026-03-05
