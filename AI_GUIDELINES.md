# 🤖 BRDD Design Website: AI Implementation Guidelines

Este documento define as regras críticas para manutenção do site brdd-design.github.io.

## 🏛 Princípios de Design e Deploy

1.  **Estratégia de Deploy**: Utilizamos **GitHub Actions**.
    - O repositório DEVE estar configurado em *Settings > Pages > Source* como **"GitHub Actions"**.
    - O build é feito automaticamente no servidor e publicado para o ambiente `github-pages`.

2.  **Caminhos Relativos**: Sempre utilize `./` em `index.html` e `vite.config.ts`.
    - `vite.config.ts` deve ter `base: './'`.
    - `index.html` deve usar caminhos relativos para scripts (ex: `./main.js`).

3.  **Tecnologias**: Vite + Vanilla HTML/JS/CSS. Mantendo a simplicidade e leveza para a especificação.

## 📝 Histórico de Solução
- Padronização do deploy via Actions para seguir o mesmo modelo do site institucional da DefolTech.
