import { FETCH_ALL_NOTIFICATIONS, CREATE_NOTIFICATION, UPDATE_NOTIFICATION, DELETE, LIKE ,CREATE} from '../constants/actionTypes';
import * as api from '../api/index.js';


export const createNotification = (post) => async (dispatch) => {
   // console.log(post);
  try {
      console.log(post);
    const { data } = await api.createNotification(post);
    console.log('hey');
    console.log(data);
    
    dispatch({ type: CREATE_NOTIFICATION, payload: data });
  } catch (error) {
      console.log('error')
    console.log(error);
  }
};
export const getNotifications = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotifications();
  //s console.log('this is comment data');console.log(data);
    dispatch({ type:FETCH_ALL_NOTIFICATIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateNotification = ( {notif}) => async (dispatch) => {
    console.log("helllllllllll")
     const{_id}=notif;
     console.log(_id);
  try {
    const { data } = await api.updateNotification( _id,notif);

    dispatch({ type: UPDATE_NOTIFICATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};


