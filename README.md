# Original Club — Landing Page

Vite + React + TypeScript + Tailwind CSS.

## Setup

```bash
npm install
cp .env.example .env   # opcional, preencha as variáveis
npm run dev            # desenvolvimento
npm run build          # build de produção (gera dist/)
npm run preview        # serve a build local
```

## Deploy no Vercel

1. Suba o repositório no GitHub.
2. Importe o projeto no Vercel (detecta Vite automaticamente).
3. Configurações padrão:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Configure as variáveis `VITE_*` listadas em `.env.example`.

## Estrutura

```
.
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig*.json
├── .env.example
└── src/
    ├── main.tsx
    ├── App.tsx
    └── index.css
```
