const Notes = require('../models/Notes')

module.exports = {
    getNotes: async (req,res)=>{
        console.log(req.user)
        try{
            const notes = await Notes.find({});
            res.render('notes.ejs', {notes: notes})
        }catch(err){
            console.log(err)
        }
    },
    createNote: async (req, res)=>{
        try{
            await Notes.create({
                title: req.body.noteTitle, 
                body: req.body.noteBody,
                userId: req.user.id})
            console.log('Note has been created!')
            res.redirect('/notes')
        }catch(err){
            console.log(err)
        }
    },
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
    deleteNote: async (req, res)=>{
        console.log(req.body.notesIdFromJSFile)
        try{
            await Notes.findOneAndDelete({_id:req.body.notesIdFromJSFile})
            console.log('Deleted Note')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    