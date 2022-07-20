const express = require("express"); 
const bodyParser = require("body-parser");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

require('dotenv').config();

const v1WorkoutRouter = require("./v1/routes/workoutRoute");

const app = express(); 
const PORT = process.env.PORT || 3000; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>V-Tax API</h2>"); 
});

app.use(bodyParser.json());

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
    V1SwaggerDocs(app, PORT)
});