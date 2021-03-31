import React from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import LoginImage from "./img/reset.svg";
import { Link } from "react-router-dom";
import textField from "../shared/TextField";

export default function reset(props) {
  const { handleSubmit } = props;

  return (
    <>
      <Grid
        container
        className="signinContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} lg={7} container className="loginContainer">
          <Grid
            item
            xs={12}
            lg={6}
            className="loginImageContainer"
            container
            justify="center"
            alignItems="center"
          >
            <img src={LoginImage} alt="Login" className="loginImage" />
          </Grid>

          <Grid
            item
            container
            xs={12}
            lg={6}
            className="loginInputContainer"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              lg={6}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Link to="/browsing" style={{ textDecoration: "none" }}>
                <h1 className="logo">MATCHA</h1>
              </Link>
              <h3 className="message">Please enter your new password</h3>
              <Field
                name="password"
                label="New Password"
                type="password"
                component={textField}
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
              <Field
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                component={textField}
                className="loginInput"
                color="secondary"
                InputProps={{ className: "loginInput" }}
                InputLabelProps={{ className: "loginInputLabel" }}
              />
              <div style={{ height: 30 }} />
              <Button
                variant="contained"
                color="primary"
                className="loginBtn"
                type="submit"
                value="ok"
                onClick={handleSubmit}
              >
                Reset Password
              </Button>
              <Link to="/signup" style={{ textDecoration: "none" }}></Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
