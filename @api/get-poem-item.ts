import axios from "axios";

export function getPoemItem(url: string) {
  return axios.get(`${ process.env.API_URL }/poem/${ url }`)
}
