import config from '@payload-config'
import '@payloadcms/next/css'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import type { ReactNode } from 'react'

import { importMap } from './admin/importMap'

type Args = {
  children: ReactNode
}

type ServerFunctionArgs = Omit<
  Parameters<typeof handleServerFunctions>[0],
  'config' | 'importMap'
>

const serverFunction = async function (args: ServerFunctionArgs) {
  'use server'

  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout
    config={config}
    importMap={importMap}
    serverFunction={serverFunction}
  >
    {children}
  </RootLayout>
)

export default Layout