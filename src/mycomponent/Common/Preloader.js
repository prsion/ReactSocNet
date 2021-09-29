import React from "react";
import spinner from "../../assets/images/spinner.gif";

let Preloader = (props) => {
  return<div style={{backgroundColor:'white'}}>
          <img src = {spinner} alt={'pic'}/>
        </div>
}

export default Preloader;