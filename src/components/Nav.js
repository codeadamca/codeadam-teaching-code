import React,{Component} from "react";
import {Link} from 'react-router-dom';

import NavSocial from './NavSocial';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">

        <nav className="ca-nav w3-orange ca-border-bottom-gray w3-hide-small">
          <div className="w3-cell-row w3-padding-16">
            <div className="w3-cell w3-cell-middle w3-container">

              <a href="https://codeadam.ca/" className="w3-text-white ca-pt-sans ca-font-none">&#8962;</a>
              <a href="https://codeadam.ca/teaching.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Teaching</a>
              <span className="w3-text-white ca-pt-sans">|</span>
              <a href="https://codeadam.ca/research-publishings.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Research and Publishings</a>
              <span className="w3-text-white ca-pt-sans">|</span>
              <a href="https://codeadam.ca/speaking-engagements.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Speaking Engagements</a>
              <span className="w3-text-white ca-pt-sans">|</span>
              <a href="https://codeadam.ca/professional-development.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">Professional Development</a>
              <span className="w3-text-white ca-pt-sans">|</span>
              <a href="https://codeadam.ca/about.html" className="w3-text-white ca-pt-sans ca-margin-small-horizontal ca-font-none">About Me</a>

            </div>
            <div className="w3-cell w3-cell-middle w3-container w3-right-align w3-hide-small w3-hide-medium">
              
              <NavSocial></NavSocial>

            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default Nav;