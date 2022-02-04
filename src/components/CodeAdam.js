import React,{Component} from "react";

import codeBlock from './../images/code-block.png';

class CodeAdam extends Component {
  render() {
    return (
      <div className="Calendly">

        <div className="ca-container-800 w3-center">
          <a href="https://codeadam.ca">
            <img src={codeBlock} className="ca-image-small" alt="" />
          </a>
        </div>

        <hr className="ca-hr" />

      </div>
    );
  }
}

export default CodeAdam;