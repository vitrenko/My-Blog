import mongoose from "mongoose";

import User from "../../models/user.js";

export const deleteUser = async (req, res) => {
	const user = await User.findById(req.params.id);
	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	await user.remove();

	return res.json({ message: "User deleted" });
};

export const updateUserProfile = async (req, res) => {
	const { id: _id } = req.params;
	const profile = req.body;
	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("User not found");
	const updatedProfile = await User.findByIdAndUpdate(
		_id,
		{ ...profile, _id },
		{ new: true }
	);
	res.json(updatedProfile);
};

export const getUser = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(404).json({ message: error.message });
	}
};

export const getUsers = async (req, res) => {
	const users = await User.find();
	const privateFields = users.map((user) => {
		return {
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
		};
	});
	return res.json(privateFields);
};
