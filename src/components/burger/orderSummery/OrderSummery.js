import React, { Component } from 'react';
import Aux from '../../../hoc/aux/Aux';
import Button from '../../ui/button/Button'


class OrderSummary extends Component {
//does not ahve to be a class

    render() {

        const ingredientSummery = Object.keys(this.props.ingredients).map(
            igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ texttransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            }
        );


        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delivious burger with following ingredients: </p>
                <ul>
                    {ingredientSummery}
                </ul>
                <p><strong>Total Proce: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }

}
export default OrderSummary;