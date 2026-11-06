# Graph Report - nayali_website  (2026-11-06)

## Corpus Check
- 33 files · ~20,849 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 174 nodes · 423 edges · 15 communities (13 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d718c055`
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
- lucide-react
- Language
- CurriculumExplorer.tsx
- TamilAudioSampler.tsx
- VisitUs.tsx
- RegistrationForm.tsx
- AGENTS.md

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
- `DemoRibbonProps` --references--> `Language`  [EXTRACTED]
  src/components/DemoRibbon.tsx → src/types/index.ts
- `FaqSectionProps` --references--> `Language`  [EXTRACTED]
  src/components/FaqSection.tsx → src/types/index.ts

## Import Cycles
- None detected.

## Communities (15 total, 2 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.16
Nodes (23): Home(), Audience(), CurriculumExplorer(), DemoRibbon(), FaqSection(), FloatingLetters(), LetterConfig, LETTERS (+15 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "package.json"
Cohesion: 0.07
Nodes (37): eslintConfig, dependencies, canvas-confetti@^1.9.4, framer-motion@^14.9.1, lucide-react@^1.70.0, react@19.3.0, react-dom@19.3.0, @types/canvas-confetti@^1.9.0 (+29 more)

### Community 3 - "Nayali Tamil Academy — Premium Demo Website"
Cohesion: 0.15
Nodes (12): 1. Update Contact Info & Location, 2. Update Tuition Fees & Pricing Plans, 3. Replace Teacher Portrait (Anitha Mam), 4. Replace Testimonials with Real Google Reviews, 🚢 Deploying to Vercel, 📝 How to Replace Placeholder Content, Nayali Tamil Academy — Premium Demo Website, Option A: Via GitHub (Recommended) (+4 more)

### Community 4 - "layout.tsx"
Cohesion: 0.18
Nodes (7): nextConfig, next@16.4.5, next, metadata, muktaMalar, notoSansTamil, plusJakartaSans

### Community 5 - "Hero.tsx"
Cohesion: 0.47
Nodes (4): BatchCountdown(), BatchCountdownProps, Hero(), HeroProps

### Community 6 - "react"
Cohesion: 0.27
Nodes (6): react, FloatingWhatsAppProps, MobileBottomBarProps, NavbarProps, TeacherCardProps, BUSINESS_INFO

### Community 7 - "index.ts"
Cohesion: 0.31
Nodes (7): AudienceProps, FaqItem, LearnerCategory, LearningMode, PlanFeature, PricingPlan, Testimonial

### Community 8 - "lucide-react"
Cohesion: 0.32
Nodes (5): lucide-react, DemoRibbonProps, FaqSectionProps, FooterProps, DICTIONARY

### Community 9 - "Language"
Cohesion: 0.27
Nodes (7): LearningPathProps, OfferingsProps, OnlineVsOfflineProps, PricingProps, StatsCounterProps, TestimonialsProps, Language

### Community 10 - "CurriculumExplorer.tsx"
Cohesion: 0.50
Nodes (3): CurriculumExplorerProps, TRACKS, CurriculumTrack

### Community 11 - "TamilAudioSampler.tsx"
Cohesion: 0.50
Nodes (3): SAMPLE_WORDS, TamilAudioSamplerProps, TamilAudioWord

### Community 12 - "VisitUs.tsx"
Cohesion: 0.53
Nodes (4): VisitUs(), VisitUsProps, AcademyStatus, getAcademyStatus()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `page.tsx`, `package.json`, `Hero.tsx`, `index.ts`, `lucide-react`, `Language`, `CurriculumExplorer.tsx`, `TamilAudioSampler.tsx`, `VisitUs.tsx`, `RegistrationForm.tsx`?**
  _High betweenness centrality (0.147) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `page.tsx`, `package.json`, `Hero.tsx`, `react`, `index.ts`, `Language`, `CurriculumExplorer.tsx`, `TamilAudioSampler.tsx`, `VisitUs.tsx`, `RegistrationForm.tsx`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06882591093117409 - nodes in this community are weakly interconnected._
- **Why does `Language` connect `Language` to `page.tsx`, `Hero.tsx`, `react`, `index.ts`, `lucide-react`, `CurriculumExplorer.tsx`, `TamilAudioSampler.tsx`, `VisitUs.tsx`, `RegistrationForm.tsx`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._