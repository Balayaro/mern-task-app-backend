const Task = require("../model/taskModel");
exports.getTasks = async (req,res) =>{
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(err) {
        res.status(500).json({
            msg:err.message
        })
    }
}

exports.createTask = async (req,res) =>{
    try{
         const task = await Task.create(req.body);
         res.status(200).json(task)
    }catch(err){
         console.log(err);
         res.status(500).json({
             msg:err
         })
    }
}

exports.getTask = async (req,res) =>{
    try{
        const {id} = req.params
        const task = await Task.findById(id);
        if(!task){
            res.status(404).send(`cannot find result of the id: ${id}`)
        }
        res.status(200).json(task)
    }catch(err){
        res.status(500).json({
            msg:err
        })
    }
}

exports.deleteTask = async (req,res) =>{
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            res.status(404).send(`cannot find result of the id: ${id}`)
        }
        res.status(200).send("task deleted")
    }catch(err){
        res.status(500).json({msg:err})
    }
}

exports.updateTask = async (req,res) =>{
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate({_id:id}, req.body,{
            new: true,
            runValidators: true
        })

        if(!task){
            res.status(404).send(`cannot find result of the id: ${id}`)
        }

        res.status(200).json(task)
    }catch(err){
        res.status(500).json({msg:err})
    }
}