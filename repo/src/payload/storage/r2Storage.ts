import { s3Storage } from '@payloadcms/storage-s3'
import type { Plugin } from 'payload'

const requiredR2Variables = [
  'R2_BUCKET',
  'R2_ACCESS_KEY_ID',
  'R2_SECRET_ACCESS_KEY',
  'R2_ENDPOINT',
] as const

const isR2Configured = () =>
  process.env.PAYLOAD_STORAGE_DRIVER === 'r2' &&
  requiredR2Variables.every((key) => Boolean(process.env[key]))

export const getStoragePlugins = (): Plugin[] => {
  if (!isR2Configured()) {
    return []
  }

  return [
    s3Storage({
      bucket: process.env.R2_BUCKET || '',
      collections: {
        media: true,
      },
      config: {
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
        },
        endpoint: process.env.R2_ENDPOINT,
        forcePathStyle: true,
        region: process.env.R2_REGION || 'auto',
      },
    }),
  ]
}
