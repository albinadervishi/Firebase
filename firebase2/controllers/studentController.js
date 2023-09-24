const firebase = require('../db');
const Student = require('../models/student');
const firestore = firebase.firestore();

const addStudent = async (req, res, next)=>{
    try{
        const data = req.body;
        await firestore.collection('students').doc().set(data);
        res.send('Record saved succesfully');
    } catch (error){
        res.status(4000).send(error.message);
    }
}

module.exports = {
    addStudent
}