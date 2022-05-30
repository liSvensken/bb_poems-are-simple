import axios from "axios";

export function getAuthorsList(limit: number, offset: number) {
  return axios.post(`${ process.env.API_URL }/authors`, {
    limit,
    offset
  })
}
