const cp = require('child_process')
const path = require('path')
const yargs = require('yargs')
const Bundler = require('parcel-bundler')

const defaultOptions = require('./defaultOptions')

function bundleServer(filePath, options) {
  let currentProc

  const bundler = new Bundler(filePath, options)

  bundler.on('buildEnd', () => {
    const proc = cp.spawn('node', [filePath])
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)

    currentProc = proc
  })

  bundler.on('buildStart', () => {
    if (!currentProc) return

    currentProc.kill('SIGKILL')
  })

  bundler.bundle()
}

module.exports = bundleServer
