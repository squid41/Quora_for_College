import React, { useState,useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import {getPosts} from '../actions/posts'
import Post from '../components/Posts/Post/Post.js'
import './styles.css';

const RefractPost=(props)=>{
      const [currentId, setCurrentId] = useState(0);
const dispatch = useDispatch();
const x=props.location.search;console.log(props);
    
    console.log(x);
    var r=x.substring(1);
    
  //  r.replace('%20', ' ');
    console.log(r);
  useEffect(() => {
        console.log('hi');
        dispatch(getPosts());
        r=r.replace('%20', ' ');
         console.log(r);

  }, []);
  const l=r.replace('%20',' ');
  console.log(l);
    
    const posts = useSelector((state) => state.posts);
    const postss=posts.filter(post=>post.title===l);
    console.log(posts);
    console.log(postss);
//   const comments = useSelector((state) => state.comment);
//     const notifs = useSelector((state) => state.notif);

    console.log(props);
    return(
   !postss.length ? <CircularProgress /> : (
      <div className="container">
        {postss.map((post) => (
        
          <div className="post1">
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    )

    )

}

export default RefractPost
