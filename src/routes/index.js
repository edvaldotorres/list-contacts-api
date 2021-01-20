const corsRouter = require('./cors')
const contactRouter = require('./contact')

module.exports = (app) => {
  app.use(corsRouter)
  app.use(contactRouter)
}
