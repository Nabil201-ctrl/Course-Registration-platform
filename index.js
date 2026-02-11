import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res )=> {
    console.log("Course-Registration")
})

app.post('/register', (req, res) => {
    const {name, department, matric} = req.body;

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})