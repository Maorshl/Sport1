import axios from 'axios';
export const Base_URL: string = 'https://sp1dv.maariv.co.il/wp-json';
export const HEADER_KEY: string = 'x-sport1-mobile-app';
import {showMessage, hideMessage} from 'react-native-flash-message';

axios.defaults.baseURL = Base_URL;
axios.defaults.timeout = 13000;
axios.defaults.headers.common[HEADER_KEY] = 'true';

export async function getCategories() {
  try {
    const {data} = await axios.get('/sport1/v1/navigation');
    return data;
  } catch (e: any) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
    throw new Error(e.message);
  }
}
export async function search(searchText: string) {
  try {
    const {data} = await axios.get(`/sport1/v1/search?s=${searchText}`);
    return data;
  } catch (e: any) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
    throw new Error(e.message);
  }
}
export async function getVodPage() {
  try {
    const {data} = await axios.get(`/wp/v2/vod/v3/main`);
    return data.categories;
  } catch (e: any) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
    throw new Error(e.message);
  }
}
export async function getVideosByCategory(id: string) {
  try {
    const {data} = await axios.get(
      `wp/v2/vod/videos/${id}?page=0&limit=20&include_children=false`,
    );
    return data;
  } catch (e: any) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
    throw new Error(e.message);
  }
}
