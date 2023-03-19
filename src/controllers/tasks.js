const Task = require('../models/tasks.js');

module.exports = {
    index : async (req,res)=>{
        try {
            const tasks = await Task.find({});
            res.render("todo.ejs" , {todotasks: tasks});
            //res.send(tasks); // send tasks to response to the client , (to stop get data) 
        } catch (error) {
            console.log(`there was an error: ${error}`);
            res.status(500).send('Internal Server Error'); // Send error message as response to the client
        }
    },
    create: (req,res)=>{
        const firstTask = new Task({title : req.body.title}); // to read from body if I want to read from url req.params.title
        firstTask.save().then(() => res.redirect("/") /* to return to the same page*/); 
    },
    edit: async (req, res) =>{
        try {
            const id = req.params.id;
            const tasks = await Task.find({});
            res.render("todoEdit.ejs" , {todotasks: tasks , idTask: id});
        } catch (error) { 
            console.log(`there was an error: ${error}`);
            res.status(500).send('Internal Server Error'); // Send error message as response to the client
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const tasks = await Task.findByIdAndUpdate(id , {title: req.body.title});
            res.redirect("/");
        } catch (error) {
            res.status(500).send('Internal Server Error'); // Send error message as response to the client
        }
    },
    delete: async (req, res) => {
        try {
            const tasks = await Task.deleteOne({_id: req.params.id});
            res.redirect("/");
        } catch (error) {
            console.log(`there was an error: ${error}`);
            res.status(500).send('Internal Server Error'); // Send error message as response to the client
        }
    }


}