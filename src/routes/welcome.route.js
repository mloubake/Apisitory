import { request, Router } from "express";

const welcomeRoute = Router();

welcomeRoute.get("/", (request, response) => {
  console.log("Entering in WelcomRoute");
  return response.status(201).send("Welcome to the API.");
});

export default welcomeRoute;
