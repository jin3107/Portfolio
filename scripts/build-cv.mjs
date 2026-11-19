// Renders /cv?lang=<lang> with headless Chrome into public/cv/*.pdf.
// Usage: start `npm run dev`, then `npm run cv:pdf` (set CHROME_PATH / CV_BASE_URL if needed).
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const base = process.env.CV_BASE_URL ?? 'http://localhost:5173'
const chrome =
  process.env.CHROME_PATH ??
  [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    '/usr/bin/google-chrome',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].find(existsSync)

if (!chrome) throw new Error('Chrome not found. Set CHROME_PATH.')

const outDir = resolve('public/cv')
mkdirSync(outDir, { recursive: true })

for (const lang of ['en', 'vi']) {
  const out = resolve(outDir, `Huynh-Tan-Chuong-CV-${lang}.pdf`)
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=5000',
    `--print-to-pdf=${out}`,
    `${base}/cv?lang=${lang}`,
  ], { stdio: 'inherit' })
  console.log('wrote', out)
}
