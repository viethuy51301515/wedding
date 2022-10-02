import {
  fetchAboutImage,
  fetchBackgroundImg,
  fetchGalleryImage,
  fetchPlacesImage,
  fetchStoriesImage,
  fetchTimerImage,
} from "../api/api";

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
};

export function fetchBackgroundSuccess(payload) {
  return {
    type: ACTION_TYPE.SET_BACKGROUND,
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

export function fetchBackground() {
  return async (dispatch) => {
    try {
      const users = await fetchBackgroundImg();
      dispatch(fetchBackgroundSuccess(users));
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
