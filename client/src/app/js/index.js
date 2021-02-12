// src/js/index.js

import store from "./store/index";
import { addArticle } from "./actions/index";
window.store = store;
window.addArticle = addArticle;

console.log(store.getState())

store.subscribe(() => console.log('Look ma, Redux!!'))

// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )

console.log(store.getState())