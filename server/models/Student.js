// NOTE what the heck is this? ORM - talks to the db
import mongoose from 'mongoose'
const Schema = mongoose.Schema

// TODO SOMEDAY THIS WILL BE TIED TO A USER ACCOUNT
export const StudentSchema = new Schema({
  name: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
