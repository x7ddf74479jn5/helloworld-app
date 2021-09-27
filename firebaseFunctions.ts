import * as functions from 'firebase-functions'
import next from 'next'
import { join } from 'path'
import * as config from './src/next.config'

const nextjsDistDir = join('src', config.distDir)

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: nextjsDistDir,
    future: {},
    experimental: {
      turboMode: false,
      reactRoot: false,
    },
  },
})
const nextjsHandle = nextjsServer.getRequestHandler()

// @see https://firebase.google.com/docs/hosting/full-config?hl=ja#rewrite-functions
const fn = functions.region('us-central1')

export const nextjsFunc = fn.https.onRequest(async (req, res) => {
  await nextjsServer.prepare()
  return nextjsHandle(req, res)
})
