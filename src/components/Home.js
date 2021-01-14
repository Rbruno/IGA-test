import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetGithubData} from '../redux/actions/githubActions';
import _ from 'lodash';
import GithubDataComponent from './GithubDataComponent';

function Home(props) {
    let [username, setusername] = useState(!_.isEmpty(props) ? props.location.pathname.substr(1) : '');
    const dispatch = useDispatch();
    const GithubData = useSelector(state => state.GithubData);
 
    //si viene algun prop en la url ejecuta la busqueda
    useEffect(() => {
        if (!_.isEmpty(props)) {FetchData(); }
     }, [username]);

    //funcion que dispara la accion para buscar la informacion de la APi 
    const FetchData = () => {
        if(username === '') return alert('Por favor ingrese un nombre de usuario de Github')
        dispatch(GetGithubData(username))
        localStorage.setItem( Date.now(),username)
        ShowData()
    }

   
    //funcion que muestra el resultado de la busqueda
    const ShowData = () => {
        //mientras este cargando
        if(GithubData.loading){
            return(
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )
        }

        //si ocurre algun error
        if(GithubData.errorMsg !== ''){
            return (
                <div className="alert alert-danger mt-2" role="alert">
                    {GithubData.errorMsg}
                </div>
          )
        }

        //si encuentra informacion
        if(!_.isEmpty(GithubData.data)){
            return <GithubDataComponent />;
        }
    }

    //function que coloca el nombre de busqueda
    let InputChange = (event) =>{
        setusername(event.target.value)
    } 
    
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-3">
                    <div className="mb-3">
                        <label className="form-label center">Buscar Githubs:</label>
                        <input type="text" className="form-control" placeholder="defunkt" name="username"  value={username} onChange={InputChange} />
                    </div> 
                    <div className="d-grid gap-2">
                        <button onClick={()=>FetchData(username)} type="button" className="btn btn-primary">Buscar</button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-md-center">
                {ShowData()}
            </div>
        </div>

        
    )
}

export default Home
