import {
  fetchAboutImage,
  fetchBackgroundImg,
  fetchFooterImg,
  fetchGalleryImage,
  fetchPlacesImage,
  fetchStoriesImage,
  fetchTimerImage,
} from "../api/api";

import { getData } from "../api/database";

export const ACTION_TYPE = {
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_ERROR: "SEARCH_ERROR",
  CLEAR_DATA: "CLEAR_DATA",
  SET_LOADING: "SET_LOADING",
  SET_BACKGROUND: "SET_BACKGROUND",
  SET_ABOUT: "SET_ABOUT",
  SET_TIMER: "SET_TIMER",
  SET_PLACES: "SET_PLACES",
  SET_GALLERY: "SET_GALLERY",
  SET_STORY: "SET_STORY",
  SET_DATA: "SET_DATA",
  SET_FOOTER: "SET_FOOTER",
};

export function fetchBackgroundSuccess(payload) {
  return {
    type: ACTION_TYPE.SET_BACKGROUND,
    payload,
  };
}

export function fetchFooterSuccess(payload) {
  return {
    type: ACTION_TYPE.SET_FOOTER,
    payload,
  };
}

export function fetchAboutSuccess(payload) {
  return {
    type: ACTION_TYPE.SET_ABOUT,
    payload,
  };
}

export function fetchTimerSuccess(payload) {
  return {
    type: ACTION_TYPE.SET_TIMER,
    payload,
  };
}

export function fetchPlacesSuccess(payload) {
  return {
    type: ACTION_TYPE.SET_PLACES,
    payload,
  };
}

export function fetchGallerySuccess(payload) {
  return {
    type: ACTION_TYPE.SET_GALLERY,
    payload,
  };
}

export function fetchStoriesSuccess(payload) {
  return {
    type: ACTION_TYPE.SET_STORY,
    payload,
  };
}

export function fetchDataSuccess(payload) {
  return {
    type: ACTION_TYPE.SET_DATA,
    payload,
  };
}

export function fetchBackground() {
  return async (dispatch) => {
    try {
      const users = await fetchBackgroundImg();
      dispatch(fetchBackgroundSuccess(users));
    } catch (error) {}
  };
}

export function fetchFooter() {
  return async (dispatch) => {
    try {
      const users = await fetchFooterImg();
      dispatch(fetchFooterSuccess(users));
    } catch (error) {}
  };
}

export function fetchAbout() {
  return async (dispatch) => {
    try {
      const users = await fetchAboutImage();
      dispatch(fetchAboutSuccess(users));
    } catch (error) {}
  };
}

export function fetchTimer() {
  return async (dispatch) => {
    try {
      const users = await fetchTimerImage();
      dispatch(fetchTimerSuccess(users));
    } catch (error) {}
  };
}

export function fetchPlaces() {
  return async (dispatch) => {
    try {
      const users = await fetchPlacesImage();
      dispatch(fetchPlacesSuccess(users));
    } catch (error) {}
  };
}

export function fetchGallery() {
  return async (dispatch) => {
    try {
      const users = await fetchGalleryImage();
      dispatch(fetchGallerySuccess(users));
    } catch (error) {}
  };
}

export function fetchStory() {
  return async (dispatch) => {
    try {
      const users = await fetchStoriesImage();
      dispatch(fetchStoriesSuccess(users));
    } catch (error) {}
  };
}

export function fetchData() {
  return async (dispatch) => {
    try {
      const data = await getData();
      dispatch(fetchDataSuccess(data));
    } catch (error) {}
  };
}
