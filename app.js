import express from "express";
import routes from "./src/routes.js";
import cors from "cors";

import { graphqlHTTP } from "express-graphql";

import schema from "./src/schema/schema.js";

const port = 4001;

const app = express();

app.use(cors());
app.use("/", routes);
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
