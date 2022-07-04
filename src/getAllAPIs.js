import { fetchPublicApis } from "../src/services/fetchPublicApis.js";

const getAllAPIs = (request, response) => {
  console.log("Entering in /getApisRoute");

  fetchPublicApis.then((api) => {
    return response.status(201).json(api.data);
  });
};

export default getAllAPIs;
