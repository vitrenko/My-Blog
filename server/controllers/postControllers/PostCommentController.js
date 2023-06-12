import Post from "../../models/post.js";
import User from "../../models/user.js";

export const addCommentToPost = async (req, res) => {
	try {
		const user = await User.findById(req.body.userId);
		let userId = req.body.userId;
		if (!user) {
			userId = "ghost";
		}
		const post = await Post.findById(req.params.id);
		post.comments.push({ text: req.body.text, userId: userId });
		await post.save();
		res.status(201).json(post);
	} catch (error) {
		res.status(404).json({ message: "Post not found" });
	}
};

export const allComments = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(201).json(post.comments);
	} catch (error) {
		res.status(404).json({ message: "Post not found" });
	}
};

export const likeComment = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		const comment = post.comments.id(req.params.commentId);
		comment.likes++;
		await post.save();
		res.json(post);
	} catch (error) {
		res.status(404).json({ message: "Comment not found" });
	}
};

export const replyComment = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		const comment = post.comments.id(req.params.commentId);
		comment.replies.push(req.body.text);
		await post.save();
		res.json(post);
	} catch (error) {
		res.status(404).json({ message: "Comment not found" });
	}
};
