import { Router } from "express";

const routes = Router();

import welcomeRoute from "./routes/welcome.route.js";
import getAllAPIsRoute from "./routes/getAllAPIs.route.js";

routes.use(welcomeRoute, getAllAPIsRoute);

export default routes;
