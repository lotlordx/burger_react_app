import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 1,
      salad: 3,
      bacon: 1,
      cheese: 1
    }
  }

  render() {
    return (
      <Aux>
        <div><Burger ingredients={this.state.ingredients}/></div>
        <div>Burger Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder