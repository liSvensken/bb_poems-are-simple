import axios from "axios";

export function getPoemsList(limit: number, offset: number, authorId?: number, grad?: number) {
  return axios.post(`${ process.env.API_URL }/poems`, {
    limit,
    offset,
    authorId,
    grad,
  })
}
