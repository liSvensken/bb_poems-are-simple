import axios from "axios";

export function getRandomPoemsList(length: number) {
  return axios.get(`${ process.env.API_URL }/random-poems/${ length }`)
}
