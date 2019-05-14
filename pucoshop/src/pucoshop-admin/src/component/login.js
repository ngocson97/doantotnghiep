import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./login.css";
import callApi from './../untils/apiCaller';

class Login extends Component {
 constructor(props) {
  super(props);

  this.state = {
   email: "",
   password: "",
   user :[]
  };
 }

 validateForm() {
  return this.state.email.length > 0 && this.state.password.length > 0;
 }

 handleChange = event => {
  this.setState({
   [event.target.id]: event.target.value
  });
 }
 Loginpage = (e) => {
  const { email, password, user } = this.state;
  localStorage.setItem("Userlogin", email);
  if(user.length!=null)
  {
   for (var i = 0; i < user.length; i++)
   {
    if (user.username == email && user.password == password)
    {
     console.log(email);
     localStorage.setItem("Userlogin", email);
     break;
     }
    }
  }
  window.location.reload();
 }

 handleSubmit = event => {
  event.preventDefault();
 }
 componentDidMount() {
  callApi('users', "GET", null).then(res => {
   console.log(res.data);
   this.setState({
    user: res.data
   });
  })
}
 render() {
  return (
   <div className="Login">
    <form onSubmit={this.handleSubmit}>
     <FormGroup controlId="email" bsSize="large">
      <label>Email</label>
      <FormControl
       autoFocus
       type="text"
       value={this.state.email}
       onChange={this.handleChange}
      />
     </FormGroup>
     <FormGroup controlId="password" bsSize="large">
      <label>Password</label>
      <FormControl
       value={this.state.password}
       onChange={this.handleChange}
       type="password"
      />
     </FormGroup>
     <Button
      block

      disabled={!this.validateForm()}
      type="submit" onClick={this.Loginpage}
     >
      Login
          </Button>
    </form>
   </div>
  );
 }
}
export default Login;