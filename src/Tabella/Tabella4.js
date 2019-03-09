import React, {Component} from 'react';
import './Tabella4.css';



class  Tabella4 extends Component {
  state = {  agenda:[  
                       { "id": 1,
                        "nome":"Mario", 
                        "cognome": "Rossi", 
                        "indirizzo":"Via Roma N°122", 
                        "telefono":"333-3456789"
                       },

                       { "id": 2,
                       "nome":"Andrea", 
                       "cognome": "Verdi", 
                       "indirizzo":"Via Milano N°12", 
                       "telefono":"380-1234567"
                      },
                       { "id": 3,
                      "nome":"Luca", 
                      "cognome": "Gialli", 
                      "indirizzo":"Via Milazzo N°56A", 
                      "telefono":"312-4567890"
                     },
                     { "id": 4,
                     "nome":"Marco", 
                     "cognome": "Pagliai", 
                     "indirizzo":"Via Montenapoleone N°33", 
                     "telefono":"338-23498734"
                    },
                    { "id": 5,
                    "nome":"Giulio", 
                    "cognome": "Andreotti", 
                    "indirizzo":"Via Calzaioli N°48R", 
                    "telefono":"332-5345670"
                   },
                   { "id": 6,
                   "nome":"Antonella", 
                   "cognome": "Clerici", 
                   "indirizzo":"Via della Pastorella N°31", 
                   "telefono":"312-4356783"
                  },
                  { "id": 7,
                  "nome":"Anna", 
                  "cognome": "Giorgi", 
                  "indirizzo":"Via Matteotti N°27", 
                  "telefono":"313-32877435"
                 },
                 { "id": 8,
                 "nome":"matteo", 
                 "cognome": "Paulucci", 
                 "indirizzo":"Via della Mezzetta N°1", 
                 "telefono":"323-1357904"
                },
                { "id": 9,
                 "nome":"Francesca", 
                 "cognome": "Gori", 
                 "indirizzo":"Viale dei Mille N°14", 
                 "telefono":"323-1357904"
                },

                     
                      ],
                  filtro:
                         { 
                           "id": null,
                           "nome":"", 
                            "cognome": "", 
                            "indirizzo":"", 
                            "telefono":""
                 },
}


dammiilvalore = (event) => {
  var agenda = {...this.state.agenda};
  // {prodotti[0].prodotto:evento.target.value};
  agenda[0].nome=event.target.value;

   console.log();
  this.setState({agenda});

}
 cattura_linea = (id) => {
console.log("click_attivato",id);
const agenda_index = this.state.agenda.findIndex( p => {
  return p.id === id;
});
console.log("agenda-index",agenda_index);
 var  filtro = [...this.state.agenda];
console.log("Filtro",filtro)
 filtro = {...this.state.agenda[agenda_index]};
 console.log("Filtro",filtro)

filtro[0] = filtro;
console.log("Filtro-zero",filtro[0])


this.setState({filtro});
}  
  render() { 
    console.log("RENDER",this.state.filtro.id);
    return (  
        <div className="wrapped">
<table className="customers">
<caption className="caption">AGENDA</caption>

  <thead>
  
  <tr>
    <th>ID</th>
    <th>NOME</th>
    <th>COGNOME</th>
    <th>INDIRIZZO</th>
    <th>TELEFONO</th>
</tr>
</thead>
<tbody>
  <tr onMouseMove={ () => this.cattura_linea(1)}>
    <td>{this.state.agenda[0].id}</td>
    <td>{this.state.agenda[0].nome}</td>
    <td>{this.state.agenda[0].cognome}</td>
    <td>{this.state.agenda[0].indirizzo}</td>
    <td>{this.state.agenda[0].telefono}</td>
  </tr>
  <tr onMouseMove={ () => this.cattura_linea(2)}>
  <td>{this.state.agenda[1].id}</td>
    <td>{this.state.agenda[1].nome}</td>
    <td>{this.state.agenda[1].cognome}</td>
    <td>{this.state.agenda[1].indirizzo}</td>
    <td>{this.state.agenda[1].telefono}</td>
  </tr>
  <tr onMouseMove={ () => this.cattura_linea(3)}>
  <td>{this.state.agenda[2].id}</td>
    <td>{this.state.agenda[2].nome}</td>
    <td>{this.state.agenda[2].cognome}</td>
    <td>{this.state.agenda[2].indirizzo}</td>
    <td>{this.state.agenda[2].telefono}</td>
  </tr>
  <tr onMouseMove={ () => this.cattura_linea(4)}>
  <td>{this.state.agenda[3].id}</td>
    <td>{this.state.agenda[3].nome}</td>
    <td>{this.state.agenda[3].cognome}</td>
    <td>{this.state.agenda[3].indirizzo}</td>
    <td>{this.state.agenda[3].telefono}</td>
  </tr>
  <tr onMouseMove={ () => this.cattura_linea(5)}>
  <td>{this.state.agenda[4].id}</td>
    <td>{this.state.agenda[4].nome}</td>
    <td>{this.state.agenda[4].cognome}</td>
    <td>{this.state.agenda[4].indirizzo}</td>
    <td>{this.state.agenda[4].telefono}</td>
  </tr>
  <tr onMouseMove={ () => this.cattura_linea(6)}>
  <td>{this.state.agenda[5].id}</td>
    <td>{this.state.agenda[5].nome}</td>
    <td>{this.state.agenda[5].cognome}</td>
    <td>{this.state.agenda[5].indirizzo}</td>
    <td>{this.state.agenda[5].telefono}</td>
  </tr>
  <tr onMouseMove={ () => this.cattura_linea(7)}>
  <td>{this.state.agenda[6].id}</td>
    <td>{this.state.agenda[6].nome}</td>
    <td>{this.state.agenda[6].cognome}</td>
    <td>{this.state.agenda[6].indirizzo}</td>
    <td>{this.state.agenda[6].telefono}</td>
  </tr>
  <tr onMouseMove={ () => this.cattura_linea(8)}>
  <td>{this.state.agenda[7].id}</td>
    <td>{this.state.agenda[7].nome}</td>
    <td>{this.state.agenda[7].cognome}</td>
    <td>{this.state.agenda[7].indirizzo}</td>
    <td>{this.state.agenda[7].telefono}</td>
  </tr>
  <tr onMouseMove={ () => this.cattura_linea(9)}>
  <td>{this.state.agenda[8].id}</td>
    <td>{this.state.agenda[8].nome}</td>
    <td>{this.state.agenda[8].cognome}</td>
    <td>{this.state.agenda[8].indirizzo}</td>
    <td>{this.state.agenda[8].telefono}</td>
  </tr>
  <tr>
  <td>01</td>
    <td>Mario</td>
    <td>Rossi</td>
    <td>Via Roma N°122</td>
    <td>333-3456789</td>
  </tr>
  </tbody>
</table>
 


<div className="contenitore" >
<div className="cont-figli num1">{this.state.filtro.id}</div>
<div className="cont-figli num2">{this.state.filtro.nome}</div>
<div className="cont-figli num3">{this.state.filtro.cognome}</div>
<div className="cont-figli num4">{this.state.filtro.indirizzo}</div>
<div className="cont-figli num5">{this.state.filtro.telefono}</div>
</div>
               
</div>

    );
}
}
 
export default Tabella4;