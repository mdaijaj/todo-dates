const express=require('express')
const Candidate = require('../controller/candidate')
const router=express()



//candidate
router.post('/newcandidate',  Candidate.newCandidate)
router.get('/allcandidate',  Candidate.allCandidate)
router.get('/candidatedetails/:_id',  Candidate.candidateDetails)
router.put('/editcandidate/:id', Candidate.editCandidate)
router.delete('/deletecandidate/:id', Candidate.deleteCandidate)

module.exports={
    router
};