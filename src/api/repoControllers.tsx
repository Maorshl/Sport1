import {
  getCategories,
  getVideosByCategory,
  getVodPage,
  search,
} from './ApiControllers';
import {showMessage} from 'react-native-flash-message';

export const morePageCategories = async () => {
  try {
    return await getCategories();
  } catch (e) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
  }
};
export const morePageSearch = async (searchText: string) => {
  try {
    return await search(searchText);
  } catch (e) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
  }
};
export const vodPageCategories = async () => {
  try {
    return await getVodPage();
  } catch (e) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
  }
};
export const vodPageVideosByCategory = async (id: string) => {
  try {
    return await getVideosByCategory(id);
  } catch (e) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
  }
};
