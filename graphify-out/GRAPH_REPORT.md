# Graph Report - nayali_website  (2026-11-06)

## Corpus Check
- 34 files · ~20,862 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 1, .toml 1, .ico 1)

## Summary
- 178 nodes · 427 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b42a36b2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- page.tsx
- compilerOptions
- package.json
- Nayali Tamil Academy — Premium Demo Website
- layout.tsx
- Hero.tsx
- react
- index.ts
- KolamDivider.tsx
- Language
- CurriculumExplorer.tsx
- TamilAudioSampler.tsx
- VisitUs.tsx
- postcss.config.mjs
- AGENTS.md
- Pricing.tsx

## God Nodes (most connected - your core abstractions)
1. `Language` - 42 edges
2. `KolamDivider()` - 27 edges
3. `react` - 25 edges
4. `lucide-react` - 22 edges
5. `Home()` - 21 edges
6. `compilerOptions` - 16 edges
7. `DICTIONARY` - 15 edges
8. `BUSINESS_INFO` - 12 edges
9. `Nayali Tamil Academy — Premium Demo Website` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `AudienceProps` --references--> `Language`  [EXTRACTED]
  src/components/Audience.tsx → src/types/index.ts
- `BatchCountdownProps` --references--> `Language`  [EXTRACTED]
  src/components/BatchCountdown.tsx → src/types/index.ts
- `CurriculumExplorerProps` --references--> `Language`  [EXTRACTED]
  src/components/CurriculumExplorer.tsx → src/types/index.ts
- `FaqSectionProps` --references--> `Language`  [EXTRACTED]
  src/components/FaqSection.tsx → src/types/index.ts
- `FloatingWhatsAppProps` --references--> `Language`  [EXTRACTED]
  src/components/FloatingWhatsApp.tsx → src/types/index.ts

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.18
Nodes (24): Home(), Audience(), CurriculumExplorer(), DemoRibbon(), FaqSection(), FloatingLetters(), LetterConfig, LETTERS (+16 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "package.json"
Cohesion: 0.07
Nodes (39): eslintConfig, dependencies, canvas-confetti@^1.9.4, framer-motion@^14.9.1, lucide-react@^1.70.0, react@19.3.0, react-dom@19.3.0, @types/canvas-confetti@^1.9.0 (+31 more)

### Community 3 - "Nayali Tamil Academy — Premium Demo Website"
Cohesion: 0.15
Nodes (12): 1. Update Contact Info & Location, 2. Update Tuition Fees & Pricing Plans, 3. Replace Teacher Portrait (Anitha Mam), 4. Replace Testimonials with Real Google Reviews, 🚢 Deploying to Vercel, 📝 How to Replace Placeholder Content, Nayali Tamil Academy — Premium Demo Website, Option A: Via GitHub (Recommended) (+4 more)

### Community 4 - "layout.tsx"
Cohesion: 0.18
Nodes (7): nextConfig, next@16.4.5, next, metadata, muktaMalar, notoSansTamil, plusJakartaSans

### Community 5 - "Hero.tsx"
Cohesion: 0.47
Nodes (4): react, BatchCountdown(), BatchCountdownProps, HeroProps

### Community 6 - "react"
Cohesion: 0.27
Nodes (6): lucide-react, FloatingWhatsAppProps, MobileBottomBarProps, NavbarProps, TeacherCardProps, BUSINESS_INFO

### Community 7 - "index.ts"
Cohesion: 0.24
Nodes (9): AudienceProps, RegistrationFormProps, FaqItem, LearnerCategory, LearningMode, PlanFeature, PricingPlan, RegistrationFormData (+1 more)

### Community 8 - "KolamDivider.tsx"
Cohesion: 0.33
Nodes (3): FaqSectionProps, KolamDividerProps, OnlineVsOfflineProps

### Community 9 - "Language"
Cohesion: 0.25
Nodes (8): DemoRibbonProps, FooterProps, LearningPathProps, OfferingsProps, StatsCounterProps, TestimonialsProps, DICTIONARY, Language

### Community 10 - "CurriculumExplorer.tsx"
Cohesion: 0.50
Nodes (3): CurriculumExplorerProps, TRACKS, CurriculumTrack

### Community 11 - "TamilAudioSampler.tsx"
Cohesion: 0.50
Nodes (3): SAMPLE_WORDS, TamilAudioSamplerProps, TamilAudioWord

### Community 12 - "VisitUs.tsx"
Cohesion: 0.60
Nodes (3): VisitUsProps, AcademyStatus, getAcademyStatus()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Hero.tsx` to `page.tsx`, `package.json`, `react`, `index.ts`, `KolamDivider.tsx`, `Language`, `CurriculumExplorer.tsx`, `TamilAudioSampler.tsx`, `VisitUs.tsx`, `Pricing.tsx`?**
  _High betweenness centrality (0.147) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `react` to `package.json`, `Hero.tsx`, `index.ts`, `KolamDivider.tsx`, `Language`, `CurriculumExplorer.tsx`, `TamilAudioSampler.tsx`, `VisitUs.tsx`, `Pricing.tsx`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06585365853658537 - nodes in this community are weakly interconnected._
- **Why does `Language` connect `Language` to `page.tsx`, `Hero.tsx`, `react`, `index.ts`, `KolamDivider.tsx`, `CurriculumExplorer.tsx`, `TamilAudioSampler.tsx`, `VisitUs.tsx`, `Pricing.tsx`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._