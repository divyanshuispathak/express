const Todo = require('../models/Todo');

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        await Todo.findByIdAndDelete({ _id: id });

        res.json({
            success: true,
            message: "Todo Deleted Successfully"
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