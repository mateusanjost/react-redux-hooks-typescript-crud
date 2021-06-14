import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ContainerLogin } from "./styles";

const Login = (props: {
  isLoggedIn: any;
  history: string[];
  onLogin: (arg0: { username: string; password: string }) => void;
  error:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const credentials = { username: "", password: "" };

  const [formData, setFormData] = useState(credentials);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (props.isLoggedIn) {
      props.history.push("/list");
    }
  }, [props.isLoggedIn, props.history]);

  const changeHandler = (event: { target: { id: any; value: any } }) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    props.onLogin(formData);
    event.preventDefault();
  };

  const signUpHandler = () => {
    setIsSignUp(true);
  };

  const renderButton = () => {
    // if (!isSignUp) {
    return (
      <>
        {!isSignUp ? (
          <div className="loginButtons">
            <Button type="submit" color="secondary">
              Log into
            </Button>
            <Button onClick={signUpHandler}>Register</Button>
          </div>
        ) : (
          <div className="loginButtons">
            <Button type="submit" onClick={signUpHandler}>
              Register
            </Button>
          </div>
        )}
      </>
    );
  };

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
            color="secondary"
          />

          <TextField
            onChange={changeHandler}
            value={formData.password}
            required
            id="password"
            label="Senha"
            type="password"
            variant="outlined"
            color="primary"
          />

          {button}
        </form>
        <div>{props.error && <p>{props.error}</p>}</div>
      </ContainerLogin>
    </>
  );
};

const mapStateToProps = (state: { auth: { isLoggedIn: any; error: any } }) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (formData: { username: string; password: string }) =>
      dispatch(actions.login(formData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
