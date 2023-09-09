//src\common\db.ts
import knex, { Knex } from 'knex'
import fs from 'fs'
import path from 'path'
let dbInstance: Knex | undefined

console.log(112)

if (!dbInstance) {
  let dbPath =
    process.env.APPDATA ||
    (process.platform == 'darwin'
      ? process.env.HOME + '/Library/Preferences'
      : process.env.HOME + '/.local/share')

  dbPath = path.join(dbPath, 'electron-vite/db.db')

  const dbIsExist = fs.existsSync(dbPath)
  if (!dbIsExist) {
    const resourceDbPath = path.join(process.execPath, '../resources/db.db')
    fs.copyFileSync(resourceDbPath, dbPath)
  }
  dbInstance = knex({
    client: 'better-sqlite3',
    connection: { filename: dbPath },
    useNullAsDefault: true,
  })
}
export const db = dbInstance
