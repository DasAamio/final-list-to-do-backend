const Project = require('../Models/project')
const Tesk = require('../Models/tasks')

module.exports={
    addProject : async (req,res)=>{
        const body = req.body
        const title = body.title
        const description = body.description
        const isImportant = body.isImportant
        const deadline = body.deadline
        const tasks = body.tasks
        const status = body.status
        const newProject = new Project()
        newProject.title = title
        newProject.description = description
        newProject.isImportant = isImportant
        newProject.deadline = deadline
        newProject.tasks = tasks
        newProject.status = status
        await newProject.save()
        res.status(200).json({
            msg: 'Project Added'
        })
    },
    updateProject: async (req, res)=>{
        const body = req.body
        console.log(body)
        const _id = body.id
        const newData = await Project.findOneAndUpdate({_id : _id },{$set:body})
        res.status(200).json({
            msg: 'Project Updated'
        })
    },
    deleteProject: async (req,res)=>{
        const body = req.body
        const _id = body.id
        const newdata = await Project.findOneAndUpdate({_id:_id},{$set:{isdelete:'Yes'}})
        res.status(200).json({
            msg:"Deleted"
        })

    },
    allProject: async (req,res)=>{
        const body = req.body
        const data = await Project.find({isdelete: 'No'}).populate('tasks')
        res.status(200).json(data)
    },
    projectBystatus: async (req,res)=>{
        const params = req.params
        const status = params.status
        const data = await Project.find({status:status,isdelete: 'No'}).populate('tasks')
        res.status(200).json(data)
    },
    singleProject: async (req,res)=>{
        const params = req.params
        const _id = params.id
        const data = await Project.find({isdelete: 'No',_id:_id}).populate('tasks')
        res.status(200).json(data)
    }

}