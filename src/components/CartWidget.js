import React from "react";
import cart from "../assets/img/cart.png"

class CartWidget extends React.Component {

    render(){
        return (
            <div className="cart">
            <img src={cart} width="55" height="55" />
          </div>
        );
    }
}

export default CartWidget;