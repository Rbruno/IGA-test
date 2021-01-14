import React from 'react'
import {NavLink} from 'react-router-dom';
import _ from 'lodash';

function HistorialComponent() {

    //recupero el localStorage
    let historial = Object.entries(localStorage);
    //lo ordeno
    historial.sort(function(a, b) {
        return b[0] - a[0];
      });
    

    const ShowHistorial= () => {
        if(!_.isEmpty(historial)){
           return (
            
            historial.map((el) => {
                    return (
                        <NavLink to={`/IGA-test/${el[1]}`} key={el[0]} className='TextNoDecoration'><li className="list-group-item list-group-item-action text-center" key={el[0]}>{el[1]}</li></NavLink>
                    )
                })
            )
        }else{
            return (
                <li className="list-group-item list-group-item-action text-center" key='0'>NO POSEE HISTORIAL</li>
            );
        }
    }

    return (
        <div className="container m-3">
            <div className="row justify-content-md-center">
                <div className="col-4">
                    <h1>Historia de busqueda</h1>
                    <ul className="list-group">
                    {
                        ShowHistorial()  
                    }
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HistorialComponent
