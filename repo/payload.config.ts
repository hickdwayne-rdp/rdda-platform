import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { DoulaProfiles } from './src/payload/collections/DoulaProfiles'
import { EventRequests } from './src/payload/collections/EventRequests'
import { Events } from './src/payload/collections/Events'
import { Media } from './src/payload/collections/Media'
import { ProfileChangeRequests } from './src/payload/collections/ProfileChangeRequests'
import { TrainingModules } from './src/payload/collections/TrainingModules'
import { TrainingProgress } from './src/payload/collections/TrainingProgress'
import { Users } from './src/payload/collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    DoulaProfiles,
    ProfileChangeRequests,
    EventRequests,
    Events,
    TrainingModules,
    TrainingProgress,
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
})
