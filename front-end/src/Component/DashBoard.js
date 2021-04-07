import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setUserName } from '../Actions/setUserName';
import { renderTextField } from '../Util/RenderField';
import userServices from '../Services/userServices';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' Nikhil Katiyar '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Form(props) {
  const classes = useStyles();
  const {handleSubmit, userDetails} = props.props
  const data = userDetails?.values
  console.log("finding data", data)
  console.log("finding data 2 ", userDetails)
  const setUserName = () => {
    props.props.setUserName();
    userServices.create(data)
    .then(() => props.props.history.push('/gameboard'))
    .catch(e => console.log(e))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter User Name
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(setUserName)}>
          <Field
            name="userName"
            component={renderTextField}
            id="outlined-basic" 
            label="User Name" 
            placeholder="User Name" 
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

class DashBoard extends Component {
  render () {
    return (
      <Form props={this.props} />
    )
  }
}

DashBoard = reduxForm({
  form: 'userDetails'
})(DashBoard)

const mapStateToProps =  ({form}) => {
  return {
    userDetails : form && form.userDetails
  }
};
const mapDispatchToProps = { setUserName };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);