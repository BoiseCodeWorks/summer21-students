// NOTE what the heck is this? ORM - talks to the db
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CourseSchema = new Schema({
  name: {
    type: String, required: true, minLength: 5, validate: /^[a-z]{3}[0-9]{3}/, lowercase: true
  },
  description: { type: String },
  credits: { type: Number, min: 0 }
}, { timestamps: true, toJSON: { virtuals: true } })
