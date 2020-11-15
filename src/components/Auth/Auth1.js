import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { logIn } from '../../redux/Actions';
import Google_maps from '../Maps/Google_maps';
import '../index.css';




class Auth1 extends Component {

    state = {
      pass: '',
      email: ''
    };


    
handleChange = event => {
  const { name, value } = event.target;

  this.setState({
    [name]: value
  });
}

onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
}

handleButtonClick2() {
  this.props.history.push('/map');
}

handleButtonClick() 
{
  console.log(this.state);
  if (this.state.email === 'admin@mail.ru' && this.state.pass === 'admin') 
  {
    this.props.login_bool(true);
    if (this.props.logInf) {
      this.props.history.push('/main');
    }
  }
  
  else if (this.state.email === 'viktor@mail.ru' && this.state.pass === 'viktor') 
  {
    this.props.login_bool(true);
    if (this.props.logInf) {
      this.props.history.push('/main');
    }
  }
  else 
  {
    this.props.login_bool(false);
    alert("Неверный пароль");
  }
  
  
}

  render() {
    
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
    const classes = useStyles;
    const { email, pass} = this.state;
    
    

    return (
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Войти
        </Typography>
          <form className={classes.form} noValidate>
          <TextField  
          label="Email Addres" 
          margin="normal" 
          variant="outlined" 
          margin="normal" 
          required 
          fullWidth 
          id="email" 
          name="email" 
          value={email} 
          autoFocus 
          type={'text'} 
          onChange={this.handleChange}/>
          <TextField  
          label="pass" 
          margin="normal" 
          variant="outlined" 
          margin="normal" 
          required 
          fullWidth 
          id="pass" 
          name="pass" 
          value={pass} 
          autoFocus 
          onChange={this.handleChange} 
          type="password"/>
          
          <div>
            <Google_maps
            
            onChange={this.handleChange} 
            />
          </div>
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleButtonClick.bind(this)}
            >
             
              
              Вход
          </Button>

          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleButtonClick2.bind(this)}
            >
              Google_Maps
              </Button> 
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Забыли пороль?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Нет аккаунта? Зарегистрируйся"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );

  }
  
}



const mapStateToProps = (state) => {
  return {
    logInf: state.auth_reducer.logged
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login_bool: (log) => dispatch(logIn(log))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth1);