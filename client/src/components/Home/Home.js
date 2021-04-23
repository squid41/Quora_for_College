import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import { getComments } from '../../actions/comet.js';
import styled from 'styled-components';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Qna from '../QnA/Qna'
import { getNotifications } from '../../actions/notification.js';
import { getQuestions } from '../../actions/question.js';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {

        dispatch(getPosts());
        dispatch(getComments());
        dispatch(getNotifications());
         dispatch(getQuestions());

  }, [currentId, dispatch]);

  return (
    <Wrapper className="india">
    
      <div className="main1">
        <div>
      <Container className="india">
        <Grid container justify-content="space-between" alignItems="stretch" spacing={3} direction="column-reverse" className="india">
          <Grid item xs={11} sm={11} >
   
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={11} sm={11}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          
        </Grid>
      </Container>
      </div>
      <div className="qna_tab">
         <Qna setCurrentId={setCurrentId} />
      </div>
      </div>
    
    </Wrapper>
  );
};
const Wrapper = styled.div`
.main1{
  display:flex;
  flex-direction:row;
}
`
export default Home;
