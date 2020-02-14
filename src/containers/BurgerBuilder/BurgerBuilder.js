import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import PRICES from "../../constants/ingredientPrices";
import Modal from "../../components/UI/Modal/Modal";
import OrderPreview from "../../components/Burger/OrderPreview/OrderPreview";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      bacon: 0,
      cheese: 0
    },
    totalPrice: 0,
    showModal: true
  };

  increaseIngredient = key => {
    let ingredients = { ...this.state.ingredients };
    ingredients[key] = ingredients[key] + 1;
    let newprice = this.state.totalPrice + PRICES[key];
    this.setState({
      ingredients: ingredients,
      totalPrice: newprice
    });
  };

  decreaseIngredient = key => {
    let ingredients = { ...this.state.ingredients };
    let newprice = this.state.totalPrice

    if (ingredients[key] >=1) {
      newprice = this.state.totalPrice - PRICES[key];
    }

    ingredients[key] = ingredients[key] - 1;

    if (ingredients[key] <= 0) {
      ingredients[key] = 0;
    }

    if (Math.sign(newprice) === -1) {
      newprice = 0;
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: newprice
    });
  };

  onChangeIngredient = (event, key) => {
    let ingredients = { ...this.state.ingredients };
    ingredients[key] = event.target.value;
    if (ingredients[key] <= 0) {
      ingredients[key] = 0;
    }
    this.setState({
      ingredients: ingredients
    });
  };


  previewModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <Aux>
        <Modal showModal={this.state.showModal} close={this.closeModal}>
          <OrderPreview items={this.state.ingredients} totalCost={this.state.totalPrice} />
        </Modal>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls
            items={this.state.ingredients}
            increase={this.increaseIngredient}
            decrease={this.decreaseIngredient}
            changed={this.onChangeIngredient}
            prices={PRICES}
            totalPrice={this.state.totalPrice}
            showModal={this.previewModal}
          />
        </div>
        <div></div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
