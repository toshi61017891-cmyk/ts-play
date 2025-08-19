// src/env.ts
import 'dotenv/config'
import { z } from 'zod'

/** ログに出すとき用のマスク */
export const mask = (v: string | undefined, keep = 4) =>
  typeof v === 'string' && v.length > keep
    ? `${v.slice(0, keep)}***(${v.length})`
    : (v ?? '(empty)')

/** .env のスキーマ定義（必要に応じて項目を増やしてOK） */
const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),

  API_BASE_URL: z.string().url(),
  API_KEY: z.string().min(1, 'API_KEY is required'),

  // 例: フラグやタイムアウトも型で保証
  FEATURE_X_ENABLED: z.coerce.boolean().default(false),
  TIMEOUT_MS: z.coerce.number().int().positive().max(120_000).default(10_000),
})

type Env = z.infer<typeof EnvSchema>

/** 読み込み & バリデーション（失敗時はわかりやすく落とす） */
function loadEnv(): Env {
  const parsed = EnvSchema.safeParse(process.env)
  if (!parsed.success) {
    // エラーを見やすく整形
    const issues = parsed.error.issues
      .map((i) => `- ${i.path.join('.')}: ${i.message}`)
      .join('\n')
    console.error('❌ Invalid environment variables:\n' + issues)
    process.exit(1)
  }
  return parsed.data
}

export const ENV = loadEnv()

// 直接実行されたときはチェックだけして成功表示
if (import.meta.url === (process as any).argv?.[1]) {
  console.log('✅ Env OK')
  console.log('API_BASE_URL:', ENV.API_BASE_URL)
  console.log('API_KEY:', mask(ENV.API_KEY))
}
