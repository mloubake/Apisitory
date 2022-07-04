import { Router } from "express";
import getAllAPIs from "../getAllAPIs.js";

const getAllAPIsRoute = Router();

getAllAPIsRoute.get("/getAPIs", getAllAPIs);

export default getAllAPIsRoute;
