const mongoose = require('mongoose');
const User = require('../model/userschema');

//add candidate admin only
const newCandidate = async (req, res) => {
    try {
        console.log("req.body", req.body)
        const candidateInf = req.body
        const candidateData = await User.create({
            taskName: candidateInf.taskName,
            due: candidateInf.due,
            description: candidateInf.description,
            status: candidateInf.status,
        })
        console.log("kishan", candidateData)
        return res.status(200).send({
            message: "admin hotel add succuess",
            data: candidateData
        })
    }
    catch (err) {
        console.log(err.message)
    }
}


// all candidate get information
const allCandidate = async (req, res) => {
    try {
        const candidateData = await User.find()
        console.log("candidateData", candidateData)
        return res.status(200).send({
            message: "get all hotel list ",
            data: candidateData
        })
    }
    catch (err) {
        console.log(err.message)
    }
}


// one candidate get details
const candidateDetails = async (req, res) => {
    try {
        console.log(req.params._id)
        const candidateData = await User.findById({
            _id: req.params._id
        })
        if (!candidateData || candidateData == undefined) {
            return res.send("not found hotel")
        }
        return res.status(200).send({
            message: "user resitered save data",
            data: candidateData
        })
    }
    catch (err) {
        console.log(err.message)
    }
}


//update candidate information
const editCandidate = async (req, res) => {
    try {
        const { taskName, description, status, due } = req.body
        const updateData = await User.findByIdAndUpdate({ _id: req.params.id }, {
            $set: { taskName, description, status, due }
        })
        console.log("updateData", updateData)
        res.send({ status: "update data successfully! ", "result": updateData })
    }
    catch (err) {
        console.log(err.message)
    }
}


//delete candidate details
const deleteCandidate = async (req, res) => {
    const userid = req.params.id
    console.log("aijaj", userid);
    try {
        const deleteInf = await User.findByIdAndRemove({ _id: mongoose.Types.ObjectId(userid) });
        console.log("delete successfully!", deleteInf)
        res.send({ message: "delete successfully!", status: "success" })
    } catch (err) {
        console.log("error  while deleting...")
        console.log(err.message)
    }
}


module.exports = {
    newCandidate,
    allCandidate,
    candidateDetails,
    editCandidate,
    deleteCandidate
}