import axios from "axios";

export const fetcher = (url: string) => {
  return axios.get(url).then((response) => response.data);
}

