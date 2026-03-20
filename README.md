# Studio Ghibli Landing Page

Landing page inspirada no universo do Studio Ghibli, desenvolvida com React, TypeScript e Vite.

## Tecnologias

- React 19
- TypeScript 5
- Vite 8
- CSS Modules
- ESLint 9

## Scripts

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de producao
- `npm run preview`: executa preview local do build
- `npm run lint`: valida padroes de codigo

## Estrutura

```text
src/
  components/
    Button/
    Ghost/
    NavBar/
  assets/
  App.tsx
  App.module.css
  index.css
  main.tsx
```

## Decisoes de codigo

- Componentes com responsabilidades pequenas e isoladas
- Tipagem explicita de props para reduzir estados invalidos
- Uso de CSS Modules para encapsular estilos por componente
- Tokens de estilo globais em `:root` para padronizar cores e tamanhos
- Regras de lint type-aware para aumentar seguranca no TypeScript

## Melhorias futuras sugeridas

- Extrair textos estaticos para um modulo de conteudo
- Criar testes de componente com React Testing Library
- Otimizar imagens grandes com formatos modernos (WebP/AVIF)
- Adicionar pipeline de CI para lint e build

## Figma do desafio

https://www.figma.com/design/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---CodeLab?node-id=5854-2&p=f&t=8lS0vslYFfMxinf5-0
