import React, {Component} from 'react';
import './Tabella1.css';
const title = [
                {label:"ID"},
                {label:"COGNOME"},
                {label:"NOME'"},
                {label:"COMPENSO"},
                {label:"PERCENTUALE"},
                {label:"UTILE"}

            ];
var totale_Comp = 0;
var i=0;
var totalestringa = null;

class Tabella1 extends Component {
    state = { 
        professionisti: [
               {id:1,cognome:"Rossi",     nome:"Andrea",       compenso:10000,  percentuale:2.5,},
               {id:2,cognome:"Verdi",     nome:"Marco",        compenso:8000,   percentuale:4.5 },
               {id:3,cognome:"Gialli",    nome:"Rossella",     compenso:5400,   percentuale:8.0},
               {id:4,cognome:"Arancione", nome:"Genoveffa",    compenso:15300,  percentuale:6.25},
               {id:5,cognome:"Bianchi",   nome:"Roberto",      compenso:24000,  percentuale:30.00},
               {id:6,cognome:"Moretti",   nome:"Massimiliano", compenso:17000,  percentuale:9.42},
               {id:7,cognome:"Vinci",     nome:"Ugo",          compenso:4700,   percentuale:12.45},
               {id:8,cognome:"Bettini",   nome:"Patrizia",     compenso:8250,   percentuale:8.24},
               {id:9,cognome:"Viviani",    nome:"Peppino",     compenso:2000,   percentuale:10.00}
              ],
                Oggtotale_Prezzo:0,
                totale_Prezzo:0,
                
            };


            pippo2 = (n) =>
            { console.log(n);
               var numero = parseFloat(n);
               Math.round((numero * 100)/100);
               return numero.toFixed(2).replace('.',',');  
            }

            componentDidMount() {
                const agg_prof = {...this.state.professionisti};
                const numero = this.state.professionisti.length;
                for ( i=0; i<numero; i++){
                    totale_Comp += (((agg_prof[i].compenso).toFixed(2))*((agg_prof[i].percentuale).toFixed(2)))/100;
                    totalestringa = (this.pippo2(totale_Comp));
                    this.setState({totale_Prezzo:totalestringa});

            }

        }
                render() {

            return(
                <div className="Frangment">
                <table className="Table">
                <caption className="Caption1">Lista dei Professionisti</caption>
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
                    {this.state.professionisti.map(professionista =>
                    <tr key ={professionista.id}>
                        <td>{professionista.id}</td>
                        <td>{professionista.cognome}</td>
                        <td>{professionista.nome}</td>
                        <td>€{this.pippo2(professionista.compenso)}</td>
                        <td>{this.pippo2(professionista.percentuale)}%</td>
                        <td>€{this.pippo2(professionista.compenso * professionista.percentuale/100)}</td>
                    </tr>
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td id="tdtfoot"></td>
                            <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td> 
                            <td>Il valore totale è:</td>
                            <td id="tdtfootultimo">€{this.pippo2(this.state.totale_Prezzo)}</td>
                        </tr>
                    </tfoot>
                </table>
                </div>
            )



};
}



export default Tabella1;