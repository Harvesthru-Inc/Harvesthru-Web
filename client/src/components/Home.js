import React from "react";
import axios from "axios";
class Home extends React.Component {
  state = {
    houses: []
  };

  // this function find object from the database using name.
  // return is an array containing all matching ones
  getHouseWithName = (name) => {
    axios
      .post("http://localhost:8000/read", {
        name: name
      })
      .then((res) => this.setState({ houses: res.data }));
  };
  componentDidMount() {
    let name = "Ribeira Charming Duplex";
    this.getHouseWithName(name);
  }

  render() {
    if (this.state.houses === []) {
      return <div>Loading</div>;
    }
    return (
      <div>
        {this.state.houses.map((house) => {
          return (
            <div>
              <div>{house.name}</div>
              <div>{house.summary}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
