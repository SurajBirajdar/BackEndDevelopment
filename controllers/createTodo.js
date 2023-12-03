//import the model
const Todo = require("../models/Todo");

//define route handler

//business logic we mentioned in controllers
exports.createTodo = async(req,res) => {
    try {
        //extrace title and description from request body
        const {title,description,age} = req.body;
        //create a new Todo object and insert into DB
        const response = await Todo.create({title,description,age});
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry created successfully"
        })
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:err.message
            }
        );
    }
}