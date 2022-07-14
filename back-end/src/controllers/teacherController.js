import TeacherModel from '../models/teacherModel.js'
import bcrypt from 'bcrypt'
import createJWT from '../auth/auth.js';

const teacherController = {
   Login: async function(req, res) {
        let data = req.body || req.query;
        let { email, password } = data
        const user = await TeacherModel.findOne({ email: email, password: password });
        !user ? res.status(404).send("User not found") : (async () => {
            const isMatch = await bcrypt.compare(password, user.password);
            !isMatch ? res.status(400).send("Password is incorrect") : (() => {
                req.user = user;
                const token = createJWT(user);
                res.status(200).json({ token });
            })()
                    
        })();
    },
    Register: async function(req, res) {
        Object.keys(req.body).length === 0 ? res.status(403).send("No data found"): (() => {
            let { email, name, age, phone, schoolName } = req.body
            TeacherModel.create({
                    email: email,
                    name: name,
                    age: age,
                    phone: phone,
                    schoolName: schoolName
                })
                .then(() => {
                 res.status(200).send("User created")
                const token = createJWT(newUser);
                res.status(200).json({
                            status: 'success',
                            statusCode: 200,
                            token: token
                    });
                });
        })()
    }
}
export default teacherController;