import React from "react";

class Homework1 extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      s1: props.p1
    };
    this.s2 = 201;
  }

  componentDidMount() {
    console.log('DidMount');
    let val1 = this.state.s1;
    val1 += 5;
    this.setState({ s1: val1 });
    this.s2 += 5;
  }

  buttonHandler = () => {
    let val1 = this.state.s1;
    val1 += 50;
    this.setState({ s1: val1 });
    this.s2 += 50;
  };

  render() {
    return (
      <>
        <div>{this.state.s1}</div>
        <div>{this.s2}</div>
        <button onClick={this.buttonHandler}>Plus 50</button>
      </>
    );

  }


}

export default Homework1;