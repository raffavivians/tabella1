import React from 'react';
import NavigationItems from './NavigationItems';
import Logo from './Logo';
import DrawerToggle from './DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar = props =>(
    <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
            <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
export default toolbar;