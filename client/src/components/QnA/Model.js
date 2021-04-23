import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import {useDispatch} from 'react-redux'
import {createQuestion} from '../../actions/question'
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
//  const dispatch = useDispatch();
const useStyles = makeStyles((theme) => ({
    head:{
        display:'flex',
        flexDirection:'row',
    },
    select:{
       marginLeft:'100px',
    },
  paper: {
    position: 'absolute',
    width: 400,
 backgroundColor: theme.palette.background.paper,
    // backgroundColor:red,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  mid:{
    display:'flex',
    flexDirection:'row',
  }
  ,
  pink:{
      fontSize:'10px',
      height:'0.7rem',
      width:'0.7rem',
      background:'black',
      padding:'5px',
      marginRight:'0.7rem',
      marginBottom:'-1rem',
  },
  red:{
      marginTop:'-20px',
  },
  body:{
     marginTop:'30px',
  },
  input:{
      marginLeft:'5px',
  },
  
  buttons:{
      display:'flex',
      justifyContent:'flex-end',
      marginTop:'2rem',
  },
  button21:{
      marginLeft:'1rem',
      fontSize:'12px',
      borderRadius:'0.7rem',
  },
  button22:{
      fontSize:'12px',
      borderRadius:'0.7rem',
  }
}));

export default function SimpleModal() {
     const dispatch = useDispatch();
     const user1=JSON.parse(localStorage.getItem('profile'));
    console.log("upppppp")
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);
  const [text,setText]=React.useState({question:'',user:''});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=async(e)=>{
     const x= document.getElementsByClassName("inpu").value
       if(text.length>0)
    {alert('question added')

    setText({...text,question:text,user:`${user1?.result?.name}`})
    console.log(user1);
    const x=user1.result.name;
    console.log(x);
    dispatch(createQuestion({...text,question:text,user:`${user1?.result?.name}`}))
    }
      setOpen(false)
  }
  const handleChange=(e)=>{
      setText(e.target.value)
  }
const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className={classes.head}>
        <CloseIcon onClick={()=>setOpen(false)}/>
        </div>
        <div className={classes.body}>
           <div className={classes.mid}>
               <div className="avater">
              <Avatar className={classes.pink} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              </div>
              <div className={classes.red}>
                  <h4>{user?.result.name}</h4>
              </div>
           </div>
           <div className={classes.input}>
            <textarea rows="4" cols="50" name="comment" form="usrform" className='inpu' autoFocus placeholder="write your question or share a link" onChange={(e)=>handleChange(e)}>
            </textarea>
           </div>
           <div className={classes.buttons}>
               <div className={classes.button}>
                   <Button variant="contained" color="grey" className={classes.button22}  onClick={()=>setOpen(false)}>
                       cancel
                       </Button>
               </div>
               <div className={classes.button}>
                   <Button variant="contained" color="primary" className={classes.button21} onClick={()=>handleSubmit()}>
                       Add Question
                       </Button>
               </div>
           </div>
        </div>
    </div>
  );

  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
