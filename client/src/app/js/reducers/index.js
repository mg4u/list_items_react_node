// src/js/reducers/index.js

import { ERROR, DO_LOGIN_SUCCESS, LOGOUT, GET_ARTICLES, GET_ARTICLE, ADD_ARTICLE, SET_SUCCESS } from "../constants/action-types";

const initialState = {
  loggedIn: false,
  message: '',
  articles: [],
  article: {},
  success_message: '',
  chat_messages: [],
  messagesGot: false
};

function rootReducer(state = initialState, action) {
	state.message=''
  if (action.type === "CHAT_MESSAGES") {
    return {...state,...action.payload}
  }

  if (action.type === DO_LOGIN_SUCCESS) {
    // console.log(' reducer do login',action.type,action)
    return {...state,...action.payload}
  }
  if (action.type === LOGOUT) {
    return {...state,...action.payload}
  }
  if (action.type === GET_ARTICLES) {
  	return {...state, articles: action.payload};
  }
  if (action.type === GET_ARTICLE) {
  	return {...state, article: action.payload};
  }
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      message:""
    });
  }

  if (action.type === SET_SUCCESS) {
  	return {...state, success_message: action.payload};
  }

  if (action.type === ERROR) {
  	return {...state,...action.payload};
  }

  return state
  // return {...state,...action.payload};
}


export default rootReducer;