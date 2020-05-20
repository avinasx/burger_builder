import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../logo/Logo'
import NavigationItems from '../navigationItems/NavigationItems'
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle'


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo height='80%' />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
export default toolbar;