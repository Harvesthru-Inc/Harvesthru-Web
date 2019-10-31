import React from "react";
import axios from "axios";
class Home extends React.Component {
  state = {};
  componentDidMount() {
    axios
      .post("http://localhost:8000/api/read", {
        name: "Ribeira Charming Duplex"
      })
      .then((res) => res.json())
      .then((res) => this.setState({ house: res }));
  }

  render() {
    console.log(this.state.house);
    return <div>This is the home</div>;
  }
}

export default Home;
