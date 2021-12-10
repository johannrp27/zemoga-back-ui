const express = require('express')
const pollRouter = require('./poll.route')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/poll', pollRouter)
}

module.exports = routerApi