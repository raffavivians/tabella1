import React from 'react';
import Logom from './immagini/logo_B2.png';
import classes from './Logo.module.css';


const logo = props => (
    <div className={classes.Logo}>
        <img src={Logom} width="75%" alt="stemma_meldola"></img>
    </div>
)

export default logo;