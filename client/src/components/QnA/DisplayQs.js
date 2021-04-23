import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { getQuestions } from '../../actions/question.js';
import CreateIcon from '@material-ui/icons/Create';
import {Icon} from 'react'
import './index.css';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';


const DisplayQs=()=>{

     const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getQuestions());
    },[])
    const questions=useSelector(state=>state.questions)
    console.log(questions);
    return(
        <div className="questions_card">
           {
               questions.map((q,i)=>{
                   const user=q.user;
                   return(
                       <div className="card_view" key={i}>
                           <div className="main">
                             <div className="card_head1">
                                 <div>
          <Avatar className="pink1" alt={user} >{user?.charAt(0)}</Avatar>
          </div>
            <div>
          <h4>{user} asked</h4>
          </div>
          </div>
          <hr/>
                           {q.question}
                           
                           <div className="answer">
                               <CreateIcon className="sz" />
                               Answer
                           </div>
                       </div>
                       </div>
                   )
               })
           }
        </div>
    )
}
export default DisplayQs