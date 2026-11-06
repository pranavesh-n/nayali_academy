# Graph Report - nayali_website  (2026-11-06)

## Corpus Check
- 28 files · ~17,048 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 155 nodes · 357 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `09d002a5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- page.tsx
- compilerOptions
- package.json
- Nayali Tamil Academy — Premium Demo Website
- layout.tsx
- dependencies
- react
- index.ts
- Language
- lucide-react
- eslint.config.mjs
- scripts
- VisitUs.tsx
- RegistrationForm.tsx
- AGENTS.md
- TeacherCard.tsx

## God Nodes (most connected - your core abstractions)
1. `Language` - 32 edges
2. `KolamDivider()` - 23 edges
3. `react` - 20 edges
4. `lucide-react` - 17 edges
5. `Home()` - 17 edges
6. `compilerOptions` - 16 edges
7. `DICTIONARY` - 15 edges
8. `BUSINESS_INFO` - 10 edges
9. `Nayali Tamil Academy — Premium Demo Website` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `AudienceProps` --references--> `Language`  [EXTRACTED]
  src/components/Audience.tsx → src/types/index.ts
- `FaqSectionProps` --references--> `Language`  [EXTRACTED]
  src/components/FaqSection.tsx → src/types/index.ts
- `FloatingWhatsAppProps` --references--> `Language`  [EXTRACTED]
  src/components/FloatingWhatsApp.tsx → src/types/index.ts
- `HeroProps` --references--> `Language`  [EXTRACTED]
  src/components/Hero.tsx → src/types/index.ts
- `LearningPathProps` --references--> `Language`  [EXTRACTED]
  src/components/LearningPath.tsx → src/types/index.ts

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.21
Nodes (20): Home(), Audience(), DemoRibbon(), FaqSection(), FloatingLetters(), LetterConfig, LETTERS, FloatingWhatsApp() (+12 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "package.json"
Cohesion: 0.16
Nodes (16): devDependencies, tailwindcss@^4, @tailwindcss/turbopack@^4, @types/node@^20, @types/react@^19, @types/react-dom@^19, typescript@^5, name (+8 more)

### Community 3 - "Nayali Tamil Academy — Premium Demo Website"
Cohesion: 0.15
Nodes (12): 1. Update Contact Info & Location, 2. Update Tuition Fees & Pricing Plans, 3. Replace Teacher Portrait (Anitha Mam), 4. Replace Testimonials with Real Google Reviews, 🚢 Deploying to Vercel, 📝 How to Replace Placeholder Content, Nayali Tamil Academy — Premium Demo Website, Option A: Via GitHub (Recommended) (+4 more)

### Community 4 - "layout.tsx"
Cohesion: 0.18
Nodes (7): nextConfig, next@16.4.5, next, metadata, muktaMalar, notoSansTamil, plusJakartaSans

### Community 5 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, canvas-confetti@^1.9.4, framer-motion@^14.9.1, lucide-react@^1.70.0, react@19.3.0, react-dom@19.3.0, @types/canvas-confetti@^1.9.0, canvas-confetti (+3 more)

### Community 6 - "react"
Cohesion: 0.27
Nodes (6): react, FloatingWhatsAppProps, HeroProps, NavbarProps, PricingProps, BUSINESS_INFO

### Community 7 - "index.ts"
Cohesion: 0.31
Nodes (7): AudienceProps, FaqItem, LearnerCategory, LearningMode, PlanFeature, PricingPlan, Testimonial

### Community 8 - "Language"
Cohesion: 0.36
Nodes (6): DemoRibbonProps, FooterProps, OnlineVsOfflineProps, TestimonialsProps, DICTIONARY, Language

### Community 9 - "lucide-react"
Cohesion: 0.28
Nodes (5): lucide-react, FaqSectionProps, KolamDividerProps, LearningPathProps, OfferingsProps

### Community 10 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.4.5, eslint, eslint-config-next

### Community 11 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 12 - "VisitUs.tsx"
Cohesion: 0.60
Nodes (3): VisitUsProps, AcademyStatus, getAcademyStatus()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `page.tsx`, `package.json`, `dependencies`, `index.ts`, `Language`, `lucide-react`, `VisitUs.tsx`, `RegistrationForm.tsx`, `TeacherCard.tsx`?**
  _High betweenness centrality (0.146) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `package.json`, `dependencies`, `react`, `index.ts`, `Language`, `VisitUs.tsx`, `RegistrationForm.tsx`, `TeacherCard.tsx`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `Language` connect `Language` to `page.tsx`, `react`, `index.ts`, `lucide-react`, `VisitUs.tsx`, `RegistrationForm.tsx`, `TeacherCard.tsx`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._