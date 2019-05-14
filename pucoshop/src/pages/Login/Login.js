import React, { Component } from 'react';
class Login extends Component {
 constructor(props) {
  super(props);
  this.state = {
   txterrr: "",
   users: [],
   id: "",
   fullname: "",
   gender: "",
   userName: "",
   email: "",
   phoneNumber: "",
   password: "",
   rPassword: ""
  }
 }
 render() {
  var { fullname } = this.state;
  return (
   <div class="span4" style={{ backgroundColor: 'none' }}>
    <div class="well">
     <h5>ALREADY REGISTERED ?</h5>
     <form>
      <div class="control-group">
       <label class="control-label" for="inputEmail">Email</label>
       <div class="controls">
        <input class="span3" type="text" placeholder="Email" />
       </div>
      </div>
      <div class="control-group">
       <label class="control-label" for="inputPassword">Password</label>
       <div class="controls">
        <input type="password" class="span3" placeholder="Password" />
       </div>
      </div>
      <div class="control-group">
       <div class="controls">
        <button type="submit" class="defaultBtn">Sign in</button> <a href="#">Forget password?</a>
       </div>
      </div>
     </form>
    </div>
   </div>
  );
 }
}
export default Login