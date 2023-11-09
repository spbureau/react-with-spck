import React from 'react';
import ReactDOM from 'react-dom';

// Class Components here all
class Title extends React.Component {
  render() {
    return (<h1 className="">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="">
      {this.props.text}
      </p>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="">
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
      </div>
    )
  }
}

// Function compo
/*
function Heading() {
  // body...
  return (
    <>
      <h1>My Spck React App</h1>
    </>
    );
} */
class Heading extends React.Component {
  render() {
    return <h1>My Spck React App</h1>;
  }
}

ReactDOM.render(
  //<Main title="React" text="Caution: do not look into laser with remaining eye."></Main>,
  <Heading />,
  document.getElementById('react-app')
);
