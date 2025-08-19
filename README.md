# ts-play

## 開発に必要なもの

- Node.js 22.x（Volta で自動）
- pnpm 10.4.0（packageManager に固定）

## よく使うコマンド

- `pnpm dev` : tsx で index.ts を実行（監視）
- `pnpm lint` : ESLint チェック
- `pnpm format` : Prettier 整形
- `pnpm typecheck` : tsc --noEmit（型チェック）
- `pnpm env:check` : Zod で .env 検証
