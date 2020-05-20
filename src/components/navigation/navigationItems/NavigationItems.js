import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './navigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="#" active>Burger Builder</NavigationItem>
        <NavigationItem link="#">Checkout</NavigationItem>

    </ul>
);


export default navigationItems;