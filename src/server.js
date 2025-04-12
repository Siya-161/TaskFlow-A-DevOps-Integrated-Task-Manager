require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:",err));

//sample route
app.get("/", (req, res) => {
    res.send("MERN Stack Backend is running");
});

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const testRoutes = require('./routes/testRoutes');
app.use('/api', testRoutes); // Prefix routes with /api