import { FETCH_ALL_QUESTIONS, CREATEQUESTION, UPDATE, DELETE, LIKE ,CREATE} from '../constants/actionTypes';
import * as api from '../api/index.js';


export const createQuestion = (post) => async (dispatch) => {
   // console.log(post);
  try {
      console.log(post);
    const { data } = await api.createQuestion(post);
    // console.log('hey1');
    // console.log(data);
    
    dispatch({ type: CREATEQUESTION, payload: data });
  } catch (error) {
      console.log('error')
    console.log(error);
  }
};
export const getQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestions();
  // console.log('this is question data');console.log(data);
    dispatch({ type: FETCH_ALL_QUESTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};


