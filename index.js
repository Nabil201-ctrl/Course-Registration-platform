import express from "express";
import router from "./routes/routes.js";
import config from "./config/config.js";

const app = express();
const { Pool } = config;

app.use(express.json());
app.use("/api", router);

// Test database connection on startup
Pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    } else {
        console.log("Database connected successfully");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})