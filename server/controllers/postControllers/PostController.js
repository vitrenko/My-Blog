import mongoose from "mongoose";
import * as dotenv from "dotenv";

import Post from "../../models/post.js";

dotenv.config();

const PORT = process.env.PORT || 3010;

export const getPost = async (req, res) => {
	const { id } = req.params;
	try {
		const post = await Post.findById(id);
		res.status(200).json(post);
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: error.message });
	}
};

export const getPosts = async (req, res) => {
	const { page } = req.query;

	try {
		const LIMIT = 15;
		const startIndex = (Number(page) - 1) * LIMIT;
		const total = await Post.countDocuments({});
		const posts = await Post.find()
			.sort({ _id: -1 })
			.limit(LIMIT)
			.skip(startIndex);
		res.status(200).json({
			data: posts,
			currentPage: Number(page),
			numberOfPages: Math.ceil(total / LIMIT),
		});
	} catch (error) {
		res.status(404).json({ message: error });
	}
};

export const createPost = async (req, res) => {
	if (req.file == undefined) {
		return res.json({ message: "Error: No File Selected!" });
	}

	const { title, body, tag, categories, slug } = req.body;
	const fullUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;

	const post = new Post({
		title,
		body,
		tag,
		categories,
		slug,
		thumbnail: fullUrl,
	});

	try {
		const newPost = await post.save();
		res.json(newPost);
	} catch (err) {
		res.json({ message: err });
	}
};

export const updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;
	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("No post with that ID");
	const updatedPost = await Post.findByIdAndUpdate(
		_id,
		{ ...post, _id },
		{ new: true }
	);
	res.json(updatedPost);
};

export const deletePost = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No post with that ID");
	await Post.findByIdAndRemove(id);
	res.json({ message: "Post deleted successfully" });
};
