import Post from "../../models/post.js";

export const viewCount = async (req, res) => {
	const { id } = req.params;
	try {
		const post = await Post.findById(id);
		post.views++;
		await post.save();
		res.json(post);
	} catch (error) {
		res.status(404).json({ message: "Post not found" });
	}
};
