import { FETCH_ALL_COMMENTS, CREATECOMMENT, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (comments= [], action) => {
   // console.log('ee');console.log(comments);
  switch (action.type) {
     case FETCH_ALL_COMMENTS:
      return action.payload;
    // case LIKE:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATECOMMENT:
      return [...comments, action.payload];
    // case UPDATE:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    // case DELETE:
    //   return posts.filter((post) => post._id !== action.payload);
    default:
      return comments;
  }
};

