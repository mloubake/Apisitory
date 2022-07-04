import axios from "axios";

const data = axios.get("https://api.publicapis.org/entries").then((api) => {
  return api.data.entries;
});

const fetchPublicApis = axios
  .get("https://api.publicapis.org/entries")
  .then((api) => {
    return api.data.entries;
  });

export { data, fetchPublicApis };
