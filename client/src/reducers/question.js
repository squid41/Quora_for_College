import { FETCH_ALL_QUESTIONS, CREATEQUESTION, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (questions= [], action) => {
   // console.log('ee');console.log(comments);
  switch (action.type) {
     case FETCH_ALL_QUESTIONS:
      return action.payload;
    // case LIKE:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATEQUESTION:
       var x=JSON.stringify(action.payload);
       var y=[...questions,x];
       localStorage.setItem('questions', y);
      return [...questions, action.payload];
    // case UPDATE:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    // case DELETE:
    //   return posts.filter((post) => post._id !== action.payload);
    default:
      return questions;
  }
};

