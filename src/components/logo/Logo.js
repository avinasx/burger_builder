import React from 'react';
import burgurLogo from '../../assets/images/burgur-logo.png';
import classes from './Logo.module.css'

const logo  = (props) => (

<div className={classes.Logo} style={{height: props.height}}>
    <img src= {burgurLogo} alt="MyBurger" />
</div>

);

export default logo;