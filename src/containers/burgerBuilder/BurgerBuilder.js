import React, { Component } from 'react';
import Aux from '../../hoc/aux/Aux';
import Burger from '../../components/burger/Burger'
import BuildControls from '../../components/burger/buildControls/BuildControls';
import Modal from '../../components/ui/modal/Modal'
import OrderSummary from '../../components/burger/orderSummery/OrderSummery'


const INGREDIANT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.7

}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }


    updatePurchaseState(Ingredients) {
        const sum = Object.keys(Ingredients).map(
            igKey => {
                return Ingredients[igKey];
            }
        ).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({ purchaseable: sum > 0 });
    }

    addIngrediantshandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = { ...this.state.ingredients }
        updateIngredients[type] = updateCount;

        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIANT_PRICES[type];
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        }
        );
        this.updatePurchaseState(updateIngredients);
    }
    removeIngrediantshandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;

        const updateIngredients = { ...this.state.ingredients }
        updateIngredients[type] = updateCount;

        const oldPrice = this.state.totalPrice;
        const priceSubstraction = INGREDIANT_PRICES[type];
        const newPrice = oldPrice - priceSubstraction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients
        }
        );
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('You can Continue');
    }



    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngrediantshandler}
                    ingredientRemoved={this.removeIngrediantshandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered = {this.purchaseHandler}
                />
            </Aux>

        );
    }

}

export default BurgerBuilder;