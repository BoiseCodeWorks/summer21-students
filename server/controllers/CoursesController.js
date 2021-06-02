import { assignmentsService } from '../services/AssignmentsService'
import { coursesService } from '../services/CoursesService'
import BaseController from '../utils/BaseController'

export class CoursesController extends BaseController {
  constructor() {
    super('api/courses')
    this.router
      .get('', this.getAll)
      .get('/:courseId/assignments', this.getAssignments)
      .post('', this.create)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const courses = await coursesService.getCourses(req.query)
      return res.send(courses)
    } catch (error) {
      next(error)
    }
  }

  async getAssignments(req, res, next) {
    try {
      const assignments = await assignmentsService.getAssignmentsByCourseId(req.params.courseId)
      return res.send(assignments)
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
      const course = await coursesService.createCourse(req.body)
      res.send(course)
    } catch (error) {
      next(error)
    }
  }
}
