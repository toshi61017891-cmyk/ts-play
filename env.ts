import 'dotenv/config'
import { z } from 'zod'

const schema = z.object({
  API_BASE_URL: z.string().url(),
  API_KEY: z.string().min(1),
})

export const ENV = schema.parse(process.env)

export const mask = (s: string, show = 2) =>
  s.slice(0, show) + '*'.repeat(Math.max(0, s.length - show))
