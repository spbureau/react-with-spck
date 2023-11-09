import React from 'react';
import ReactDOM from 'react-dom';

function Dev (){
  return <h2>Web.dev</h2>;
}

class Footer extends React.Component {
  render () {
    return (
        <div className="w3-teal">
          <br /> <br /> <br />
          <hr />
          <h3>Powered by Simon Peters</h3>
          <h4>www.simonpetersgh.org</h4>
          <Dev />
        </div>
      );
  }
  
}

export default Footer;