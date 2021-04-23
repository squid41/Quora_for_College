import { FETCH_ALL_COMMENTS, CREATECOMMENT, UPDATE, DELETE, LIKE ,CREATE} from '../constants/actionTypes';
import * as api from '../api/index.js';


export const createComment = (post) => async (dispatch) => {
   // console.log(post);
  try {
      console.log(post);
    const { data } = await api.createComment(post);
    console.log('hey');
    console.log(data);
    
    dispatch({ type: CREATECOMMENT, payload: data });
  } catch (error) {
      console.log('error')
    console.log(error);
  }
};
export const getComments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchComments();
   console.log('this is comment data');console.log(data);
    dispatch({ type: FETCH_ALL_COMMENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};


