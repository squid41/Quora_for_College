import React ,{useEffect,useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography ,Avatar} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { useDispatch,useSelector } from 'react-redux';
import moment from 'moment';
import { likePost, deletePost } from '../../../actions/posts';
import {createComment} from '../../../actions/comet'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { getComments } from '../../../actions/comet';
import useStyles from './styles';
import Jio from './Jio';
import { disconnect } from 'mongoose';

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch();
  const classes = useStyles();
    const [click,setClick]=useState(false);
    
  const user = JSON.parse(localStorage.getItem('profile'));
 const [commentData, setCommentData] = useState({message:'',id:post._id,name:user?.result?.name});
 

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };
   const commnts = useSelector((state) => state.comment);//console.log(commnts);
      const notifs = useSelector((state) => state.notif);//console.log(notifs);
    
   
  const handleSubmit=async(e)=>{
    e.preventDefault();
   // console.log(post._id);
     const {message}=commentData;
     console.log(message);
   if(message)
    {setCommentData({...commentData,id:post._id})

   // console.log(commentData);
    dispatch(createComment(commentData));
    //dispatch(getComments());
    e.target.value='';}
    
  }
  // useEffect(() => {
  //       dispatch(getComments());

  // }, [dispatch])
    //   const commnts = useSelector((state) => state.comment);
    //  console.log(commnts)
 
  const actualcom=commnts.filter((com)=>com.id===post._id)
  //console.log(actualcom);

  return (
    <Card className={classes.card}>
      {/* <CardMedia className={post.selectedFile ?classes.media:classes.hell} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} /> */}
      <div className={classes.medi}>
        <Typography variant="h6" className={classes.name}>{post.name}</Typography>
        <Typography variant="h12" className={classes.time}>{moment(post.createdAt).fromNow()}</Typography>
         {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div >
        <Button onClick={() => setCurrentId(post._id)} style={{ color: 'black' }} size="small" >
          <MoreHorizIcon fontSize="default" className={classes.edit}/>
        </Button>
      </div>
      )}
      </div>
            <CardMedia className={post.selectedFile ?classes.media:classes.hel} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

      {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div >
        <Button onClick={() => setCurrentId(post._id)} style={{ color: 'black' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )} */}
      {/* <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div> */}
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="black" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        <div className={classes.comment} onClick={()=>{setClick(!click)}}>
          <div>
          <button className={classes.comment} ><ChatBubbleOutlineOutlinedIcon fontSize="small" /></button>
          </div>
         
        </div>
       
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))} >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
      {click && <CardContent>
            <form  className={classes.heyu} onSubmit={handleSubmit} >
               <div className={classes.comment_section}>
                 <div className={classes.comment_data}>
              <input type="text" placeholder="add a public comment" className={classes.inpu}   onChange={(e) => setCommentData({...commentData,message:e.target.value })}>
                
              </input>
              </div><div className={classes.comment_send}>
            <button type="submit" disabled={!user?.result} className={classes.comment_submit}><SendOutlinedIcon/></button>
            </div>
                </div>
            </form>
           
            </CardContent>
}
       {click && <div className={classes.totalComments}>
        {actualcom.length>0 && click &&
        
        actualcom.map((com)=>{
          const {name,message}=com;
          
          return (
            
            <div className={classes.message}>
              <div className={classes.info}>
              <div className={classes.avatar}>
               <Avatar className={classes.pink1} alt={name} >{name?.charAt(0)}</Avatar>
              </div>
              <div className={classes.name}>
              {name}
              </div>
              </div>
            <div className={classes.maindoc}>
              {message}
            </div>
            </div>
          )
        })}
        </div>}
    </Card>
  );
};

export default Post;
