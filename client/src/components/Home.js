import React from "react";
class Home extends React.Component {
  render() {
    if (this.state.houses === []) {
      return <div>Loading</div>;
    }
    return <div>this is the home page</div>;
  }
}

export default Home;
