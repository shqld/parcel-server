#!/usr/bin/env node

const path = require('path')
const parcelServer = require('./lib')

const filePath = path.resolve(process.argv[2])
parcelServer(filePath)
