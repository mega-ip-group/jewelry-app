import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
function Signup() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSumbitHandler = (e) => {
    e.preventDefault();
  };
  //   firstName: String,
  //   lastName: String,
  //   email: String,
  //   phone: String,
  //   password: String,
  return (
    <form onSubmit={onSumbitHandler} className="login">
      <div className="login__header">
        <img className="login__logo" src={logo} alt="logo" />
        <Typography className="login__header_text" variant="h6" gutterBottom>
          Sign Up
        </Typography>
      </div>
      <TextField
        id="firstname"
        label="First Name"
        variant="standard"
        onChange={(e) => {
          setFname(e.target.value);
        }}
      />
      <TextField
        id="lastname"
        label="Last Name"
        variant="standard"
        onChange={(e) => {
          setLname(e.target.value);
        }}
      />
      <TextField
        id="email"
        label="Email"
        variant="standard"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="standard"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        disabled={!fName || !lName || !password || !email}
        type="submit"
        className={
          !fName || !lName || !password || !email
            ? "not_work_login"
            : "login__button"
        }
        value="Sign Up"
      />
      <Typography variant="subtitle1" gutterBottom>
        already have an account? <Link to="/login">Login</Link>
      </Typography>
    </form>
  );
}

export default Signup;
