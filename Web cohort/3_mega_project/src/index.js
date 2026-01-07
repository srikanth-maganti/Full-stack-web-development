import app from "./app.js"
import dotenv from "dotenv"
import db_connect from "./db/db.js"
import cookieParser  from "cookie-parser"
import healthcheckrouter from "./routes/healthcheck.routes.js"
import userRouter from "./routes/user.routes.js"
import noteRouter from "./routes/note.routes.js"
import taskRouter from "./routes/task.routes.js"
import projectRouter from "./routes/project.routes.js"

dotenv.config({
    path:"../.env"
})

const port =process.env.PORT|| 8000;


db_connect()
.then(()=>{

    console.log("Database connected successfully");
    app.listen(port,()=>{
    console.log("server started listening to port no :",port);
})
})
.catch(()=>{
    console.log("database connection failed");
    process.exit(1);
}
)
app.use(cookieParser());
app.use("/healthcheck",healthcheckrouter);
app.use("/api/v1/users",userRouter);
app.use("/project",projectRouter)
app.use("/project/:projectId/task",taskRouter);
app.use("/project/:projectId/note",noteRouter);


