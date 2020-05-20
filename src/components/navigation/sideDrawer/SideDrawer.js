import React from 'react';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../ui/backdrop/Backdrop';
import Aux from '../../../hoc/aux/Aux';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
        <Backdrop  show= {props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo  height='11%'/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer;