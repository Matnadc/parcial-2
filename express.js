import express from 'express';
import ProjectsApiRoute from "./api/routes/projects.api.routes.js";
import TechsApiRoute from "./api/routes/techs.api.routes.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", ProjectsApiRoute);
app.use("/", TechsApiRoute);

app.listen(8080, () =>{
    console.log("Servidor iniciado con éxito. http://localhost:8080");
});