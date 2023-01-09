const { authJwt, verifyCam } = require('../middleware')
const controller = require('../controllers/camera.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
  })
  /**
   * @swagger
   *tags:
   *  name: Cameras
   *  description: API to manage the cameras.
   */

  app.post(
    '/api/camera',
    [authJwt.verifyToken, authJwt.isClientOrBranch, verifyCam.rtsp, verifyCam.numCams],
    controller.addCamera
  )

  /**
   * @swagger
   * /api/camera/viewAll:
   *   get:
   *    tags:
   *       - Cameras
   *    summary: "Camera listing"
   *    operationId: speeding
   *    description: "Use to obtain all cameras for this user"
   *    parameters:
   *      - in: header
   *        name: x-access-token
   *        schema:
   *          type: string
   *        required: true
   *    responses:
   *      '200':
   *        description: "A successful response"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: true
   *               data:
   *                 type: object
   *                 properties:
   *                   name:
   *                     description: "Name of the camera"
   *                     type: string
   *                     example: Office
   *                   id:
   *                     description: "Id of the camera"
   *                     type: string
   *                     example: 2da2b89d-57a5-4f87-8e54-1809793c3945
   *                   createdAt:
   *                     description: "Date when this camera was created."
   *                     type: date
   *                     example: 2021-02-02T16:17:56.000Z
   *                   updatedAt:
   *                     description: "Date when this camera has been updated."
   *                     type: date
   *                     example: 2021-02-02T16:17:56.000Z
   *      '500':
   *        description: "Server error"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: false
   *               message:
   *                 description: "Type of failure"
   *                 type: string
   *                 example: Error message generated by the server
   */
  app.get('/api/camera/viewAll', [authJwt.verifyToken], controller.viewCams)

  /**
   * @swagger
   * /api/camera/viewLiveCams:
   *   get:
   *    tags:
   *       - Cameras
   *    summary: "Live Cameras listing"
   *    operationId: viewLiveCams
   *    description: "Use to obtain all live cameras for this user"
   *    parameters:
   *      - in: header
   *        name: x-access-token
   *        schema:
   *          type: string
   *        required: true
   *    responses:
   *      '200':
   *        description: "A successful response"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: true
   *               data:
   *                 type: object
   *                 properties:
   *                   name:
   *                     description: "Name of the camera"
   *                     type: string
   *                     example: Office
   *                   id:
   *                     description: "Id of the camera"
   *                     type: string
   *                     example: 2da2b89d-57a5-4f87-8e54-1809793c3945
   *                   createdAt:
   *                     description: "Date when this camera was created."
   *                     type: date
   *                     example: 2021-02-02T16:17:56.000Z
   *                   updatedAt:
   *                     description: "Date when this camera has been updated."
   *                     type: date
   *                     example: 2021-02-02T16:17:56.000Z
   *      '500':
   *        description: "Server error"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: false
   *               message:
   *                 description: "Type of failure"
   *                 type: string
   *                 example: Error message generated by the server
   */
  app.get('/api/camera/viewLiveCams', [authJwt.verifyToken], controller.viewLiveCams)

  /**
   * @swagger
   * /api/camera/viewCam/{id}:
   *   get:
   *    tags:
   *       - Cameras
   *    summary: "Single Camera listing"
   *    operationId: viewCam
   *    description: "Use to obtain the details of a camera for this user"
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *      - in: header
   *        name: x-access-token
   *        schema:
   *          type: string
   *        required: true
   *    responses:
   *      '200':
   *        description: "A successful response"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: true
   *               data:
   *                 type: object
   *                 properties:
   *                   id:
   *                     description: "Id of the camera"
   *                     type: string
   *                     example: 2da2b89d-57a5-4f87-8e54-1809793c3945
   *                   name:
   *                     description: "Name of the camera"
   *                     type: string
   *                     example: Office
   *                   type:
   *                     description: "Type of the camera"
   *                     type: string
   *                     example: testType
   *                   rtsp_in:
   *                     description: "RTSP url associated with the camera"
   *                     type: string
   *                     example: Office
   *                   http_in:
   *                     description: "HTTP-In url associated with the camera"
   *                     type: string
   *                     example: Office
   *                   http_out:
   *                     description: "HTTP-Out url associated with the camera"
   *                     type: string
   *                     example: Office
   *                   heatmap_pic:
   *                     description: "Heatmap picture of the camera"
   *                     type: string
   *                     example: Office
   *                   id_account:
   *                     description: "Name of the camera"
   *                     type: string
   *                     example: Office
   *                   id_branch:
   *                     description: "Name of the camera"
   *                     type: string
   *                     example: Office
   *                   pic_height:
   *                     description: "Name of the camera"
   *                     type: number
   *                     example: Office
   *                   pic_width:
   *                     description: "Name of the camera"
   *                     type: number
   *                     example: Office
   *                   cam_height:
   *                     description: "Name of the camera"
   *                     type: number
   *                     example: Office
   *                   cam_width:
   *                     description: "Name of the camera"
   *                     type: string
   *                     example: Office
   *                   stored_vid:
   *                     description: "Stored video status of teh camera"
   *                     type: string
   *                     example: No
   *                   atributes:
   *                     description: "Name of the camera"
   *                     type: object
   *                     example: Office
   *                   last_summarization_status:
   *                     description: "Name of the camera"
   *                     type: number
   *                     example: -1
   *                   any_successful_summarization:
   *                     description: "Name of the camera"
   *                     type: number
   *                     example: 0
   *                   sum_http_in:
   *                     description: "Date when this camera was created."
   *                     type: string
   *                     example: 2021-02-02T16:17:56.000Z
   *      '500':
   *        description: "Server error"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: false
   *               message:
   *                 description: "Type of failure"
   *                 type: string
   *                 example: Error message generated by the server
   */
  app.get(
    '/api/camera/viewOne/:id',
    [authJwt.verifyToken, authJwt.isClientOrBranch],
    controller.viewCam
  )

  app.put(
    '/api/camera/edit/:id',
    [authJwt.verifyToken, authJwt.isClientOrBranch],
    controller.editCam
  )

  /**
   * @swagger
   * /api/camera/delete/{id}:
   *   delete:
   *    tags:
   *       - Cameras
   *    summary: "Delete camera"
   *    operationId: deleteCam
   *    description: "Use to delete a camera for this user."
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *      - in: header
   *        name: x-access-token
   *        schema:
   *          type: string
   *        required: true
   *    responses:
   *      '200':
   *        description: "A successful response"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: true
   *               camera:
   *                 description: "ID of deleted camera"
   *                 type: string
   *                 example: 56
   *      '500':
   *        description: "Server error"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: false
   *               message:
   *                 description: "Type of failure"
   *                 type: string
   *                 example: Error message generated by the server
   */
  app.delete(
    '/api/camera/delete/:id',
    [authJwt.verifyToken, authJwt.isClientOrBranch],
    controller.delCam
  )

  app.post('/api/cameraImages/', [authJwt.verifyToken, authJwt.isClientOrBranch], controller.addAtr)

  /**
   * @swagger
   * /api/camera/play:
   *   post:
   *    tags:
   *       - Cameras
   *    summary: "Start stream camera"
   *    operationId: camPlay
   *    description: "Use to start streaming of a camera for this user."
   *    parameters:
   *      - in: header
   *        name: x-access-token
   *        schema:
   *          type: string
   *        required: true
   *    requestBody:
   *       content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                id:
   *                  description: "ID of the camera"
   *                  type: string
   *                  example: 56
   *    responses:
   *      '200':
   *        description: "A successful response"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: true
   *               my_ip:
   *                 description: "Your IP address"
   *                 type: string
   *                 example: 127.0.0.1
   *               port:
   *                 description: "Port number"
   *                 type: number
   *                 example: 8080
   *      '500':
   *        description: "Server error"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: false
   *               message:
   *                 description: "Type of failure"
   *                 type: string
   *                 example: Error message generated by the server
   */
  app.post('/api/camera/play', [authJwt.verifyToken], controller.cam)

  /**
   * @swagger
   * /api/camera/stop:
   *   post:
   *    tags:
   *       - Cameras
   *    summary: "Stop stream camera"
   *    operationId: camStop
   *    description: "Use to stop streaming of a camera for this user."
   *    parameters:
   *      - in: header
   *        name: x-access-token
   *        schema:
   *          type: string
   *        required: true
   *    requestBody:
   *       content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                id:
   *                  description: "ID of the camera"
   *                  type: string
   *                  example: 56
   *    responses:
   *      '200':
   *        description: "A successful response"
   *        content:
   *          application/json:
   *            schema:
   *             type: object
   *             properties:
   *               success:
   *                 description: "Result type"
   *                 type: boolean
   *                 example: true
   *               message:
   *                 description: "Success message"
   *                 type: string
   *                 example: Stopped
   *               port:
   *                 description: "Port number"
   *                 type: number
   *                 example: 8080
   */
  app.post('/api/camera/stop', [authJwt.verifyToken], controller.stopCam)

  app.post('/api/camera/checkRel', [authJwt.verifyToken], controller.checkCamRel)
}
