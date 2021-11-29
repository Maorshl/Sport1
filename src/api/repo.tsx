import axios from 'axios';
export const Base_URL: string = 'https://sp1dv.maariv.co.il/wp-json';
export const HEADER_KEY: string = 'x-sport1-mobile-app';

axios.defaults.baseURL = Base_URL;
axios.defaults.timeout = 1000;
axios.defaults.headers.common[HEADER_KEY] = 'true';

export async function getCategories() {
  const {data} = await axios.get('/sport1/v1/navigation');
  return data;
}
