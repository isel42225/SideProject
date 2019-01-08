'use strict'

const http = require('http')
const express = require('express')
const morgan = require('morgan')
const app = express()
const webpack = require('webpack')
const wbconfig = require('./webpack.config.js')

app.use(morgan('dev'))
app.use(webpack(wbconfig))


http
    .createServer(app)
    .listen(3000, () => console.log('Listening on port 3000'))