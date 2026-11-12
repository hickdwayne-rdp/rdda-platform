import type { NextConfig } from "next"
import { withPayload } from "@payloadcms/next/withPayload"

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/admin/*': ['./node_modules/@img/sharp-libvips-linux-x64/lib/**/*'],
    '/api/*': ['./node_modules/@img/sharp-libvips-linux-x64/lib/**/*'],
  },
  async headers() {
    return [
      {
        source: '/admin/reset/:token',
        headers: [
          { key: 'Referrer-Policy', value: 'no-referrer' },
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig)
