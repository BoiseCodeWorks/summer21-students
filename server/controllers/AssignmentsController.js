import { assignmentsService } from '../services/AssignmentsService'
import BaseController from '../utils/BaseController'

export class AssignmentsController extends BaseController {
  constructor() {
    super('api/assignments')
    this.router
      .get('/:id', this.getOne)
      .post('', this.create)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getOne(req, res, next) {
    try {
      const assignment = await assignmentsService.getOne(req.params.id)
      return res.send(assignment)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const assignment = await assignmentsService.create(req.body)
      res.send(assignment)
    } catch (error) {
      next(error)
    }
  }
}
