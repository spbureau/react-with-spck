import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer'
//import '/index.css';

// Class Components here all
/*
class TryClass extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return  (
      <div className="">
        <Title label={this.props.title} />
          <Paragraph text={this.props.text}&& />
      </div>
    )
  }
}
*/

class Main extends React.Component {
  render() {
    return (
        <div className="w3-container w3-teal main">
            <h2>My Spck React App <i className="fa fa-laptop"></i></h2>
            <h2>My Spck React App <i className="fa fa-laptop"></i></h2>
            <Footer />
        </div>
      );
  }
}

ReactDOM.render(
  //<TryClass title="React" text="Caution: do not look into laser with remaining eye."></TryClass>,
  <Main />,
  document.getElementById('root')
);
