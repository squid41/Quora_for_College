import { FETCH_ALL_NOTIFICATIONS, CREATE_NOTIFICATION, UPDATE_NOTIFICATION, DELETE, LIKE } from '../constants/actionTypes';

export default (notifs= [], action) => {
   // console.log('ee');console.log(comments);
  switch (action.type) {
     case FETCH_ALL_NOTIFICATIONS:
      return action.payload;
    // case LIKE:
    //   return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE_NOTIFICATION:
      return [...notifs, action.payload];
     case UPDATE_NOTIFICATION:
       return notifs.map((post) => (post._id === action.payload._id ? action.payload : post));
    // case DELETE:
    //   return posts.filter((post) => post._id !== action.payload);
    default:
      return notifs;
  }
};

