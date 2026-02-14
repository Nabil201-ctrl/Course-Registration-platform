import express from "express";
import router from "./routes/routes.js";
import pool from "./config/config.js";
import swaggerUi from "swagger-ui-express";
import specs from "./config/swagger.js";
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api", router);

// Test database connection on startup
pool.query('SELECT NOW()', (err, res) => {
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