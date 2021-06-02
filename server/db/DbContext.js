import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import { CourseSchema } from '../models/Course'
import { AssignmentSchema } from '../models/Assignment'
import { StudentSchema } from '../models/Student'

class DbContext {
  Assignments = mongoose.model('Assignment', AssignmentSchema)
  Courses = mongoose.model('Course', CourseSchema)
  Students = mongoose.model('Student', StudentSchema)
  Values = mongoose.model('Value', ValueSchema)
}

export const dbContext = new DbContext()
