import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper,MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';
import { createNotification } from '../../actions/notification';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
   const [notifData,setNotifData]= useState({message:'',user:''})

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
       
              setNotifData({...notifData,message:`${user?.result?.name} posted on  ${postData.title}`,user:`${user?.result?.name}`})
              const x=`${user?.result?.name} posted on  ${postData.title}`
              console.log(x);
              console.log('huss');
              dispatch(createNotification({...notifData,message:`${user?.result?.name} posted on  ${postData.title}`,type:'unseen',user:`${user?.result?.name}`}));
       dispatch(createPost({ ...postData, name: user?.result?.name }));
      
      //  // setNotifData({message:`${user?.result?.name} posted on  ${postData.title}`})
      //         console.log('hell')
      //    console.log(notifData);
      // dispatch(createNotification(notifData));
       clear();
    } else {
      //  setNotifData({message:`${user?.result?.name} updated its post on  ${postData.title}`})

      dispatch(createNotification({...notifData,message:`${user?.result?.name} posted on  ${postData.title}`,type:'unseen'}));

       dispatch(updatePost({ ...postData, name: user?.result?.name }));
      //    console.log(notifData);
      //   dispatch(createNotification(notifData));

      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h8">{currentId ? `Editing "${post.title}"` : 'Start a Post'}</Typography>
       {/* <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} > */}
      <TextField id="select" name="title" label="Title" value="20" select variant="outlined" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} > 
  <MenuItem value="Web Devlopment">Web Devlopment</MenuItem>
  <MenuItem value="App Devlopment">App Devlopment</MenuItem>
  <MenuItem value="Competetive Programming">Competetive Programming</MenuItem>
  <MenuItem value="Data Science">Data Science</MenuItem>
  <MenuItem value="Programming Languages">Programming Languages</MenuItem>
  <MenuItem value="Development Tools">Development Tools</MenuItem>
  <MenuItem value="RoadMap for 1st Year">RoadMap for 1st Year</MenuItem>
  <MenuItem value="RoadMap for 2nd Year">RoadMap for 2nd Year</MenuItem>
</TextField>
   <hr/>
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        {/* <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} /> */}
        <div className={classes.fileInput}>
          <FileBase className={classes.inpu} type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
          </div>

        <Button variant="contained" color="primary" type="submit" className="buttonSubmit">Submit</Button>
        <Button variant="contained" color="secondary" onClick={clear} className="ct">Clear</Button>
        
      </form>
    </Paper>
     
  );
};

export default Form;
