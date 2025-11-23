import express from "express"
import theGoodByeRoutes from "./routes/goodbyeRoutes"

const app = express();

app.use("/theGoodbye", theGoodByeRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
