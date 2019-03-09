import React, {Component} from 'react';
import './Tabella1.css';

const title = [
                {label:"ID"},
                {label:"PRODOTTO"},
                {label:"QUANTITA'"},
                {label:"PREZZO"},
                {label:"TOTALE PREZZO"}
            ];
var totale1 = 0;
var i=0;
var totalestringa = null;


  


class Tabella1 extends Component {
    state = { 
        prodotti: [
               {id:1,prodotto:"Zucchero", quantita:1, prezzo:1.10},
               {id:2,prodotto:"Latte", quantita:2, prezzo:1.10},
               {id:3,prodotto:"Pasta", quantita:3, prezzo:1.10},
               {id:4,prodotto:"Arance", quantita:4, prezzo:1.24},
               {id:5,prodotto:"Pere", quantita:2, prezzo:1.20},
               {id:6,prodotto:"Pesche", quantita:3, prezzo:1.30},
               {id:7,prodotto:"Noci", quantita:4, prezzo:1.30},
               {id:8,prodotto:"Ananas", quantita:2, prezzo:1.20}
              ],
                Oggtotale_Prezzo:null,
                totale_Prezzo : 0,
                hiddenprice: false
                
            };

            pippo2 = (n) =>
            { console.log(n);
               var numero = parseFloat(n);
               Math.round((numero * 100)/100);
               return numero.toFixed(2).replace('.',',');  
            }


            componentDidMount(){
                const agg_prodotti = {...this.state.prodotti};
                const numero = this.state.prodotti.length;
                for ( i=0; i<numero; i++){
                    totale1 += (((agg_prodotti[i].prezzo).toFixed(2))*((agg_prodotti[i].quantita).toFixed(2)));
                    totalestringa = (this.pippo2(totale1));
                    this.setState({totale_Prezzo:totalestringa});
                 }

            }

            evidenzia_Riga = (evento, prodotto) => {
                const width = this.refs.linea.clientWidth;
                const Height = this.refs.linea.clientHeight;

                console.log("prova",evento,prodotto);
                console.log(width, Height)
            }

            dammiilvalore = (event) => {
                var prodotti = {...this.state.prodotti};
                // {prodotti[0].prodotto:evento.target.value};
                prodotti[0].prodotto="vino"

                 console.log();
                this.setState({prodotti});

            }

           render() {
            return(
                <div className="Frangment">
                <table className="Table">
                <caption className="Caption1">Lista della Spesa</caption>
                <thead>
                <tr>
                   {title.map(ctrl =>
                       <th key={ctrl.label}>
                       {ctrl.label}
                      </th>
                   
                   )}
                   </tr>
                   </thead>
                   <tbody>
                    {this.state.prodotti.map(prodotto =>
                    <tr key ={prodotto.id}
                        onMouseMove={() => this.evidenzia_Riga()}
                        ref="linea">
                        <td>{prodotto.id}</td>
                        <td>{prodotto.prodotto}</td>
                        <td>{prodotto.quantita}</td>
                        <td>€{this.pippo2(prodotto.prezzo)}</td>

                        <td>€{this.pippo2(prodotto.prezzo * prodotto.quantita)}</td>
                    </tr>
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td id="tdtfoot">&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            <td>Il valore totale è:</td>
                            <td id="tdtfootultimo">€{this.state.totale_Prezzo}</td>
                        </tr>
                        

                    </tfoot>
                </table>
                
               
                </div>
            )
     };
}



export default Tabella1;