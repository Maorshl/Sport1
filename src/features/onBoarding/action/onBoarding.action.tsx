import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';

export const firstTimeCheck = createAsyncThunk(
  'app/firstTimeCheck',
  async (a: any = null, {rejectWithValue}) => {
    try {
      return await getData();
    } catch (e: any) {
      console.log('nisan');
    }
  },
);
export const finishOnBoarding = createAsyncThunk(
  'app/finishOnBoarding',
  async (a: any = null, {rejectWithValue}) => {
    try {
      return await saveToStorage();
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  },
);

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('onBoarding');
    console.log(jsonValue);
    if (jsonValue != null) {
      return false;
    } else return true;
  } catch (e) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
  }
};

export const saveToStorage = async () => {
  try {
    await AsyncStorage.setItem('onBoarding', 'true');
  } catch (e) {
    showMessage({
      message: 'An Error Occurred, Please try again later',
      type: 'danger',
    });
  }
};
