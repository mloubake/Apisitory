import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} from "graphql";

import { data } from "../services/fetchPublicApis.js";

let apis = Promise.resolve(data);

let apiArr = [];
apis.then((api) => {
  Object.entries(api).flatMap((entry) => {
    apiArr.push({
      api: entry[1].API,
      description: entry[1].Description,
      auth: entry[1].Auth,
      https: entry[1].HTTPS,
      cors: entry[1].Cors,
      link: entry[1].Link,
      category: entry[1].Category,
    });
  });
});

const APIType = new GraphQLObjectType({
  name: "API",
  fields: () => ({
    api: { type: GraphQLString },
    description: { type: GraphQLString },
    auth: { type: GraphQLString },
    https: { type: GraphQLBoolean },
    cors: { type: GraphQLString },
    link: { type: GraphQLString },
    category: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    apis: {
      type: new GraphQLList(APIType),
      resolve(parent, args) {
        return apiArr;
      },
    },
    fetchApis: {
      type: new GraphQLList(APIType),
      args: { api: { type: GraphQLString } },
      resolve(parent, args) {
        return apiArr.filter((item) => {
          return item.api.toLowerCase().includes(args.api);
        });
      },
    },
  },
});

export default new GraphQLSchema({ query: RootQuery });
