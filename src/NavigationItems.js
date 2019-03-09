import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
         
         <NavigationItem link="/" exact>Tabella1</NavigationItem>
         <NavigationItem link="/Tabella2" >Tabella2</NavigationItem>
         <NavigationItem link="/Tabella3" >Tabella3</NavigationItem>
         <NavigationItem link="/Tabella4" >Tabella4</NavigationItem>
        
    </ul>
);
export default navigationItems;
