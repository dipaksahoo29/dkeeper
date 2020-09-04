import React from "react";

function Login(props){

  return <form>
          <input type="text" placeholder="User Name"/>
          <input type="password" placeholder="Password" />
          {props.isRegister?null:<input type="password" placeholder="Confirm Password" />}
          <button type="Submit">{props.isRegister?"Login":"Register"}</button>
        </form>;
}


export default Login;
