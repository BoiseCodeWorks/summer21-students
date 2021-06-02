// NOTE what the heck is this? ORM - talks to the db
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AssignmentSchema = new Schema({
  name: { type: String, required: true },
  score: { type: Number, min: 0 },

  // REVIEW setting up a relationship
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

AssignmentSchema.virtual('course', {
  localField: 'courseId',
  foreignField: '_id',
  ref: 'Course',
  justOne: true
})
