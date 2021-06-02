import { dbContext } from '../db/DbContext'

class AssignmentsService {
  async getAssignmentsByCourseId(courseId) {
    return await dbContext.Assignments.find({ courseId }).populate('course', 'name')
  }

  async getOne(id) {
    return await dbContext.Assignments.findById(id)
  }

  async get(query = {}) {
    return await dbContext.Assignments.find(query)
  }

  async create(assignmentData) {
    return await dbContext.Assignments.create(assignmentData)
  }
}

export const assignmentsService = new AssignmentsService()
