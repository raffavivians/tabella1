import React, { Component } from 'react';
import './Tabella3.css';
class Tabella3 extends Component {
    render() { 
        return (  
            <div className="Frangment3">
                <table className="Table3">
                    <caption className="Caption3">AGENDA1</caption>
                    <thead>
                    <tr>
                      
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Indirizzo</th>
                        <th>Città</th>
                        <th>Telefono</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>01</td>
                        <td>Mario</td>
                        <td>Rossi</td>
                        <td>Via Calzaioli N°23</td>
                        <td>Firenze</td>
                        <td>055606034</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Paolo</td>
                        <td>Bianchi</td>
                        <td>Via della Rondinella N°24</td>
                        <td>Firenze</td>
                        <td>055601011</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Marco</td>
                        <td>Galli</td>
                        <td>Via Circondaria N°45</td>
                        <td>Fiesole</td>
                        <td>055342312</td>
                    </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}
 
export default Tabella3;