import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import decode from 'jwt-decode';
import NotificationsIcon from '@material-ui/icons/Notifications';

import memories from '../../images/memories.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import Comet from '../Comment/Comet';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [state, setState] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const notifs = useSelector((state) => state.notif);
  const newnotifs=notifs.filter(not=>not.type==='unseen');
  const total=newnotifs.length;
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
     const newnotifs=notifs.filter(not=>not.type==='unseen');
    const token = user?.token;
     const tota = newnotifs.length;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
//console.log(total);
//  const handleNotif=()=>{
//          dispatch(updateNotification({...notifData,message:`${user?.result?.name} posted on  ${postData.title}`,type:'unseen'}));

//  }
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Quora for college</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
             
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
             <button className={classes.decor} onClick={()=>setState(!state)}>
               {total? <span className={classes.cartvalue}>{total}</span>:''}
               {/* {!total && <span className={classes.cartvalue1}>23</span>} */}

            {/* <span className={total>0?classes.cartvalue:'null'}>
            {total>0?{total}:''}
           </span> */}
           <NotificationsIcon/>
           </button>
           {state ? <Comet/>:console.log('no')}
           {/* {state ? handleNotif():console.log('no')} */}

          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
