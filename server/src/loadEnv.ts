/**
 * Loads .env in dev. In production (Cloud Run) env vars are injected at runtime.
 * Import this at the top of index.ts before anything else.
 */
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Load from server/.env in development
config({ path: path.resolve(__dirname, '..', '.env') })
