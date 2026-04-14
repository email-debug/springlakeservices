/**
 * Spring Lake Services — Express server.
 * In production (Cloud Run) also serves SPA static files from dist/.
 */
import './loadEnv.js'
import express, { Request, Response } from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

// EXPRESS_PORT: set via .env in dev. PORT: set by Cloud Run in production.
const PORT = Number(process.env.EXPRESS_PORT) || Number(process.env.PORT) || 39998
const isProduction = process.env.NODE_ENV === 'production'

const productionOrigins = [
  'https://springlakeservices.com',
  'https://www.springlakeservices.com',
]

// ── SPA static files (production only) — before CORS so assets aren't blocked ─

if (isProduction) {
  const distPath = process.env.CLIENT_DIST_PATH || path.join(__dirname, '..', '..', '..', 'dist')
  app.use(express.static(distPath))
}

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)
    if (productionOrigins.includes(origin)) return callback(null, true)
    if (!isProduction && (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:'))) {
      return callback(null, true)
    }
    callback(new Error('Not allowed by CORS'))
  },
  credentials: true,
}))

app.use(express.json({ limit: '10mb' }))

// ── Core routes ──────────────────────────────────────────────────────────────

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/warm', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

// ── Future routers go here ───────────────────────────────────────────────────
// import { exampleRouter } from './example/router.js'
// app.use('/api', exampleRouter)

// ── SPA fallback (production only) ───────────────────────────────────────────

if (isProduction) {
  const distPath = process.env.CLIENT_DIST_PATH || path.join(__dirname, '..', '..', '..', 'dist')
  app.get('*', (req: Request, res: Response) => {
    if (path.extname(req.path) !== '') return res.status(404).send('Not found')
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`SLS server listening on http://localhost:${PORT}`)
})
