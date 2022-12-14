import { ACTION_TYPE } from "../action/action";

const initialState = {
  background: "",
  footer: "",
  about: [],
  timer: "",
  places: {
    prewedding: [],
    ceremony: [],
    wedding: [],
  },
  gallery: {
    prewedding: [],
    ceremony: [],
    wedding: [],
  },
  stories: [],
  data: {},
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.SET_BACKGROUND:
      return {
        ...state,
        background: action.payload.background,
      };
    case ACTION_TYPE.SET_ABOUT:
      return {
        ...state,
        about: action.payload.about,
      };

    case ACTION_TYPE.SET_TIMER:
      return {
        ...state,
        timer: action.payload.timer,
      };
    case ACTION_TYPE.SET_PLACES:
      return {
        ...state,
        places: action.payload.places,
      };
    case ACTION_TYPE.SET_GALLERY:
      return {
        ...state,
        gallery: action.payload.gallery,
      };
    case ACTION_TYPE.SET_STORY:
      return {
        ...state,
        stories: action.payload.stories,
      };
    case ACTION_TYPE.SET_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    case ACTION_TYPE.SET_FOOTER:
      return {
        ...state,
        footer: action.payload.footer,
      };
    default:
      break;
  }
  return state;
}
