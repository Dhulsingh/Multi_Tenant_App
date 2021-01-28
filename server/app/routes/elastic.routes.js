const { authJwt, verifyCam } = require("../middleware");
const controller = require("../controllers/elastic.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/elastic/ping",
    [],
    controller.ping
  );


  app.get(
    "/api/elastic/search/:query",
    [],
    controller.search
  );

  app.post(
    "/api/elastic/video",
    [authJwt.verifyToken],
    controller.upload
  );

  app.get(
    "/api/elastic/video/list",
    [authJwt.verifyToken],
    controller.viewVids
  );

  app.post(
    "/api/elastic/video/del",
    [authJwt.verifyToken],
    controller.delVid
  );
}