import React, { Component } from 'react';
import Aux from '../Aux';
import classes from './Layout.module.css'
import Toolbar from '../../components/navigation/toolbar/Toolbar'
import SideDrawer from '../../components/navigation/sideDrawer/SideDrawer'

class Layout extends Component {
state = {
    showSideDrawer: true
}

sideDrawerClosedHandler = () =>{
this.setState({ showSideDrawer: false });
}

sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
        return {
            showSideDrawer:!prevState.showSideDrawer
        }
    });
}


    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}


export default Layout;