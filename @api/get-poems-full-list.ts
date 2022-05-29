import axios from "axios";

export function getPoemsFullList() {
  return axios.get(`${ process.env.API_URL }/poems/1`);
}
