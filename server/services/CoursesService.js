import { dbContext } from '../db/DbContext'

class CoursesService {
  async getCourses(query = {}) {
    return await dbContext.Courses.find(query)
  }

  async createCourse(courseData) {
    return await dbContext.Courses.create(courseData)
  }
}
export const coursesService = new CoursesService()
