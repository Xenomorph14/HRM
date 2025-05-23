const router = require("express").Router()
const Project = require("../../../models/project")
const Staff = require("../../../models/staffInformation")
const Issue = require("../../../models/issue")
const { v4: uuidv4 } = require('uuid');
const { exist } = require("joi");

router.post("/createIssue/:uid/:pid", async (req, res, next) => {
  try{
    const uid = req.params.uid
    const pid = req.params.pid
    const name = req.body.issueName
    const type = req.body.issueType
    const assign = req.body.issueAssign
    const priority = req.body.issuePriority
    const description = req.body.issueDescription
    const existProject = await Project.findOne({ pid : pid , member  : { $elemMatch : { uid : uid } } })
    
    if(existProject){
        let creator = existProject.member.find(e => e.uid === uid ) 
        let assigned = existProject.member.find(e => e.email === assign ) 
        let icode = `${existProject.code}-${existProject.issue.length + 1}`
        // console.log(icode);
        var assignedPerson
        let creatorInfo = {
            uid : creator.uid,
            name : creator.name,
            email : creator.email,
            avatar : creator.avatar
        }
        // console.log(creatorInfo);
        if(assigned){
            assignedPerson = {
                uid : assigned.uid,
                name : assigned.name,
                email : assigned.email,
                avatar : assigned.avatar,
            }
        }else{
            res.json({ data : {
                status : "The person you assign is not available or not in your project ! "
            } })
        }
        // console.log(creatorInfo);
        let result = {
            iid : existProject.pid,
            issueName : name,
            issueCode : icode,
            issueType : type,
            issueCreator : creatorInfo,
            issueAssign : assignedPerson,
            issueDescription : description,
            issuePriority : priority
        }
        const newIssue = new Issue(result)
        let err = newIssue.validateSync()
        if(!err){
            console.log(err);
            newIssue.save()
            const update = await Project.findOneAndUpdate({pid : pid},{ 
                $push : { issue : {
                    iid : result.iid,
                    issueName : result.issueName,
                    issueCode : result.issueCode,
                    issueType : result.issueType
                } }
            }, { runValidators: true })
        }else{
            return res.json({ status : "Cannot assign !" })
        }
        return res.json({
                status : `Assign to ${assign} complete !`
        })
    }else{
        return res.json([])
    }

  }catch(err){
    console.log(err.message);
    return res.json({
        data : {
            status : "Something went wrong !"
        }
    })
  }

})

module.exports = router