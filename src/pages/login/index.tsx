import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ContainerLogin } from "./styles";


const Login = (props: any) => {
  const credentials = { username: "", password: "" };

  const [formData, setFormData] = useState(credentials);
  const [isSignUp, setIsSignUp] = useState(false);
  

  useEffect(() => {
    if (props.isLoggedIn) {
      props.history.push('/list');
    }
  }, [props.isLoggedIn, props.history]);


  const changeHandler = (event: any) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const submitHandler = (event: any) => {
    props.onLogin(formData);
    event.preventDefault();
  };

  const signUpHandler = () => {
    setIsSignUp(true);
  }


  const renderButton = () => {
    if (!isSignUp) {
      return (
        
        <div className="loginButtons">
          {/* <button type="submit">Sign in</button> */}
          <Button type="submit" color="secondary">Sign in</Button>
          {/* //<button type="button" onClick={signUpHandler}>Sign up</button> */}
          <Button onClick={signUpHandler}>Sign up</Button>
        
        </div>
      )
    } else {
      return (
        <div className="loginButtons">
          <button type="submit">Sign up</button>
        </div>
      )
    }
  }

  const button = renderButton();

  return (
    <>
      <ContainerLogin>
       
      <FontAwesomeIcon icon={faDragon} className="Logo" size="7x" />
      <form onSubmit={submitHandler} className="formLogin" autoComplete="off">
        <TextField
          onChange={changeHandler}
          value={formData.username}
          required
          id="username"
          label="User"
          variant="outlined"
          color="secondary" />

        <TextField
          onChange={changeHandler}
          value={formData.password}
          required
          id="password"
          label="Senha"
          type="password"
          variant="outlined"
          color="primary" />

        {button}
      </form>
      <div>
        {props.error && <p>{props.error}</p>}
      </div>
     
      </ContainerLogin>
    </>
  );
};


const mapStateToProps = (state: any) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error
  }
}


const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (formData: any) => dispatch(actions.login(formData))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
