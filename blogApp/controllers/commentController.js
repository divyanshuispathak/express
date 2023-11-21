const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

exports.createComment = async (req, res) => {
    try {
        // fetch data from request body
        const { post, user, body } = req.body;

        // create our own object so that we can use save() method
        const comment = new Comment({
            post, user, body
        });

        // saving the comment to the database
        const savedComment = await comment.save();

        // find the post by ID, and then add the new comment to the comments array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments") // populate the comments array with comment documents
            .exec();

        res.json({
            post: updatedPost
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error while creating comment"
        });
    }
}