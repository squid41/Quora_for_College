
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
  
    width: '97%',
    margin: '10px 5px',
    
    
  },
  inpu:{
    width:'50px',
    height:'48px',
    objectFit:'cover',

  },
  ct:{
    marginRight:50,
  },
  buttonSubmit: {
    marginBottom: 100,
        marginRight:50,

  },
  
}));
