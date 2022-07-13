import studentModel from "../models/studentModel.js";

const studentController = {
   createStudent: (req, res) => {
      studentModel.create(req.body)
                  .then(() => res.status(201).send('student created'))
                  .catch(err => { throw err });
   },
   
};
export default studentController;