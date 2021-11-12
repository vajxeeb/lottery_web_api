
const express = require('express')
const route = express.Router()
const branch = require('../controllers/branch.controller')

/**
 * @swagger
 * tags:
 *  name: Branch
 *  description: Branch api
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   branch:
 *    type: object
 *    required:
 *      - branch_id
 *      - phone
 *      - branch_name
 *    properties:
 *     brance_id:
 *      type: integer
 *      description: Branch id
 *     phone:
 *      type: string
 *      description: Branch phone
 *     branch_name:
 *      type: string
 *      description: Branch name 
 *    example:
 *      branch_id: 22
 *      phone: 02051201014
 *      branch_name: ຕົວຢ່າງ
 */

//...........POST..................//
/**
 * @swagger
 * /api/branch:
 *  post:
 *   summary: Create a new brance
 *   tags: [Branch]
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/branch'
 *   responses:
 *    201:
 *       description: Create
 *    403:
 *       description: Forbiden
 *    404:
 *       description: Not found
 *    500:
 *       description: Some server error
 */
route.post('/branch', branch.Create)

//............PUT..................//

/**
 * @swagger
 * /api/branch:
 *  put:
 *   summary: Update the branch by brance id
 *   tags: [Branch]
 *   requestBody: 
 *    required: true
 *    content:
 *     application/json:
 *       schema:
 *         $ref: '#/components/schemas/branch'
 *   responses:
 *    200:
 *       description: OK
 *    401:
 *       description: Unauthorization
 *    403:
 *       description: Forbiden
 *    404:
 *       description: Not found
 *    500:
 *       description: Some server error
 */

route.put('/branch', branch.Update)
//.............DELETE...............//

/**
 * @swagger
 * /api/branch/{branch_id}:
 *  delete:
 *   summary: Delete the branch by brance id
 *   tags: [Branch]
 *   parameters:
 *    - in: path
 *      name: branch_id
 *      schema:
 *       type: integer
 *      require: true
 *      description: Branch id
 *      example: 2
 *   responses:
 *    200:
 *       description: OK
 *    401:
 *       description: Unauthorization
 *    403:
 *       description: Forbiden
 *    404:
 *       description: Not found
 *    500:
 *       description: Some server error
 */

route.delete('/branch/:branch_id', branch.Delete)

//.............GET..................//

/**
 * @swagger
 * /api/branch:
 *  get:
 *   summary: Get a list of branch
 *   tags: [Branch]
 *   responses:
 *    200:
 *       description: OK
 *    401:
 *       description: Unauthorization
 *    403:
 *       description: Forbiden
 *    404:
 *       description: Not found
 *    500:
 *       description: Some server error
 * 
 */
route.get('/branch', branch.Get)


module.exports = route