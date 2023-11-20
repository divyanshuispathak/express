const Todo = require('../models/Todo');

exports.getTodo = async (req, res) => {
    try {
        // fetch all todos from the database
        const todos = await Todo.find({});
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Data is Fetched"
        })
    }
    catch (err) {
        console.log(err);
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message
        })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found with the given id"
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`
        })
    } catch (error) {
        console.log(err);
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message
        })
    }
}