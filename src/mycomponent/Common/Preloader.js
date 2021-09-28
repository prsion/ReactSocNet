import React from "react";
import spinner from "../../assets/images/spinner.gif";

let Preloader = (props) => {
  return<div style={{backgroundColor:'white'}}>
          <img src = {spinner}/>
        </div>
}

export default Preloader;