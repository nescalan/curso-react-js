import React, { Component } from "react";

class ReactRouter extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Soy "ReactRouter"</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ReactRouter;
