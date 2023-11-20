const Todo = require('../models/Todo');

exports.updateTodo = async (req, res) => {
    try {
        // const {id} = req.params;
        const id = req.params.id;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated Successfully"
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