// src/js/actions/index.js
import axios from 'axios';

import { ERROR, GET_ARTICLES, LOGOUT, DO_LOGIN_SUCCESS, GET_ARTICLE, SET_SUCCESS, ADD_ARTICLE } from "../constants/action-types";
import { API_URL, HEADERS } from '../../config';
import Store from '../store'

export function logout(payload) {
  return { type: LOGOUT, payload: { loggedIn: false, token: '' } }
};

export function doLogin(email,password){
  let data={
    email: email,
    password: password,
  },
  options={
    data:data,
    method:'post',
    url:'users/auth/login'
  }
  return  async (dispatch)=>{
    let response=await DoRequest(options)
    if(response){
      dispatch({type: DO_LOGIN_SUCCESS, payload:{ loggedIn: true, user_data:response.user, token: response.token } })
    }
  }
}

export function getArticles(mine){
  const url= mine? 'articles/mine' : 'articles'
  const options={
    method: 'get',
    url,
    requireAuth: true
  }
  return  async (dispatch)=>{
    let response=await DoRequest(options)
    if(response){
      dispatch({type: GET_ARTICLES , payload: response })
    }
  }
}

export function getArticle(payload) {
  return { type: GET_ARTICLE, payload }
};

export function addArticle(data){
  const url= data.id? `articles/${data.id}` : 'articles'
  const method= data.id? `put` : 'post'

  const options={
    method,
    url,
    requireAuth: true,
    data
  }
  return  async (dispatch)=>{
    let response=await DoRequest(options)
    console.warn({response});
    
    if(response){
      dispatch({type: ADD_ARTICLE , payload: response })
      dispatch({type: SET_SUCCESS , payload: 'Done Successfully' })
    }
  }
}

export function deleteArticle(id){
  const options={
    url: `articles/${id}`,
    method: 'delete',
    requireAuth: true
  }
  return  async (dispatch)=>{
    let response=await DoRequest(options)
    console.warn({response});
    
    if(response){
      dispatch({type: SET_SUCCESS , payload: response.message })
      getArticles(true)
    }
  }
}

export function emptySuccess() {
  return { type: SET_SUCCESS, payload: '' }
};

export function emptyMessage() {
  return { type: ERROR, payload: {message: ''} }
};

export function forbiddenWord(payload) {
  return { type:ERROR, payload }
};

let DoRequest=async (options)=>{
  const dispatch = Store.dispatch

  if(typeof axios==undefined){
    return false
  }
  try{

    let data= options.data || {},
    method= options.method || 'get',
    headers= HEADERS
    if (true === options.requireAuth) {
      headers= {...headers, Authorization: `Bearer ${Store.getState().token}`}
    }

    let config={
      baseURL: API_URL,
      url: options.url,
      headers,
      method,
      onUploadProgress: function (progressEvent) {
        console.log('onUploadProgress progressEvent ',progressEvent)
        // Do whatever you want with the native progress event
      },
      onDownloadProgress: function (progressEvent) {
        console.log('onDownloadProgress progressEvent ',progressEvent)
        // Do whatever you want with the native progress event
      },
    }
    if(method=='get'){
      config.params=data
    }else{
      config.data=data
    }
    const response= await axios(config);
    // console.log('response',response)
    return response.data
  } catch ( { response } ) {
    console.clear()
    // console.log('error',response)
    // handle error
    dispatch({ type: ERROR, payload:{message: response.data.message || "Please Insert Login info"} });
    alert('Request error') 
    return false
  }
}