import axios from "axios";

// Create an axios instance
export default axios.create({
  // for netlify take value from environment variable
  baseURL: "https://swapi.dev/api/",
  timeout: 5000,
});
