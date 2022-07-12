import { Schema, model } from 'mongoose'
import validator from 'validator'

const studentSchema = new Schema({
   name: {
      type: [String, 'Name must be a string.'],
      minlength: [3, 'Name`s minimum length is 3.'],
      maxlength: [15, 'Name`s maximum length is 15.'],
      trim: true,
      required: [true, 'Name is required.']
   },
   age: {
      type: [Number, 'age`s must be a number.'],
      required: [true, 'age is required.'],
      min: [5, 'minimum age in 5.'],
      max: [20, 'maximum age in 20.']   
   },
   email: {
      type: [String, 'email must be a string.'],
      required: true,
      unique: true,
      minlength: [7, 'email`s minimum length is 7.'],
      maxlength: [20, 'email`s maximum length is 20.'],
      validator: {
         validate: value => validator.isEmail(value),
         message: 'Enter a valid email',
      }
   },
   phone: {
      type: String, 
      trim: true,
      unique: true,
      minlength: [12, 'Phone number`s length must be 12 or more.'],
      validator: {
         validate: value => validator.isMobilePhone(value),
         message: 'Enter a valid phone number'
      }
   }
})

const studentModel = model('student', studentSchema);

export default studentModel;