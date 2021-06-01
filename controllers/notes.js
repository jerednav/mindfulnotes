const Notes = require('../models/Notes')

module.exports = {
    getNotes: async (req,res)=>{
        console.log(req.user)
        try{
            const noteItem = await Notes.find({userId:req.user.id})
            res.render('notes.ejs', {note: noteItem, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createNote: async (req, res)=>{
        try{
            await Notes.create({note: req.body.noteItem, userId: req.user.id})
            console.log('Note has been created!')
            res.redirect('/notes')
        }catch(err){
            console.log(err)
        }
    }
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    