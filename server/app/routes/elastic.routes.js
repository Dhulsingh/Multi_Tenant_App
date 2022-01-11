const {authJwt, verifyCam} = require('../middleware')
const controller = require('../controllers/elastic.controller')
const multer = require('multer')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
  })

  app.get('/api/elastic/ping', [], controller.ping)

  app.post('/api/elastic/search/', [authJwt.verifyToken], controller.search)

  app.post('/api/elastic/addIncident/', [authJwt.verifyToken], controller.addIncident)

  app.post('/api/elastic/memo/:id', [authJwt.verifyToken], controller.addMemo)

  app.get('/api/elastic/incident/:id', [authJwt.verifyToken], controller.incidentDetails)

  app.get(
    '/api/elastic/incidentLogs',
    [authJwt.verifyToken, authJwt.isClient],
    controller.incidentLogs
  )

  app.post('/api/elastic/video', [authJwt.verifyToken], controller.upload)

  app.post('/api/elastic/zip', [authJwt.verifyToken], controller.uploadZip)

  app.get('/api/elastic/video/list', [authJwt.verifyToken], controller.viewVids)

  app.get('/api/elastic/demo', [], controller.some)

  app.get('/api/elastic/demo2', [], controller.loit)

  app.post('/api/elastic/video/delete', [authJwt.verifyToken], controller.delVid)

  app.post('/api/elastic/video/s3', [authJwt.verifyToken, multer().single('file')], controller.s3up)
}
