import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import * as dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3010;

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());
app.use(express.static("public"));

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const swaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "My App",
			version: "0.0.2",
		},
	},
	apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

mongoose.set("strictQuery", false);
mongoose
	.connect(process.env.MONGODB)
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((error) => console.log(error));
