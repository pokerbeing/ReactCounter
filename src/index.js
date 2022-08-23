import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  background: "rgb(0,200,240)"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0
    };
  }

  // This method changes the state to increment counters
  increaseCount() {
    // setState of count1 and count2 to previous state of those properties
    // plus 1
    this.setState((prevState) => ({
      count1: prevState.count1 + 1,
      count2: prevState.count2 + 1
    }));
    // add an additional 1 to count2
    this.setState((prevState) => ({ count2: prevState.count2 + 1 }));
    console.log(this.state.count1, this.state.count2);
  }

  // Render method is automatically invoked on a re-render
  render() {
    return (
      <div style={styles}>
        <div>
          {/* The clicked button calls the increaseCount() function*/}
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>Counter1: {this.state.count1}</h2>
        <h2>Counter2: {this.state.count2}</h2>
      </div>
    );
  }
}

root.render(<App />);
