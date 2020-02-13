import React from "react";
import Control from "./Control/Control";
import Aux from "../../../hoc/Aux";
import BurgerOrder from "../BurgerOrder/BurgerOrder";

const buildControls = props => {
  let itemsToBeBuilt = Object.keys(props.items)
    .sort()
    .map((key, i) => {
      return (
        <Control
          key={key + i}
          title={key}
          value={props.items[key]}
          increase={() => props.increase(key)}
          decrease={() => props.decrease(key)}
          changed={event => props.changed(event, key)}
          price = {props.prices[key]}
        />
      );
    });

  return (
    <Aux>
      <div>{itemsToBeBuilt}</div>
      <div>
        <BurgerOrder totalPrice={props.totalPrice} />
      </div>
    </Aux>
  );
};

export default buildControls;
