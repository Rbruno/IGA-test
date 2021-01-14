import React from 'react';
import {useSelector} from 'react-redux';
import _ from 'lodash';

const GithubDataComponent = props => {
    const GithubData = useSelector(state => state.GithubData);
    const data = GithubData.data;
    const repos = GithubData.repos;

    //funcion que imprime los repositorios
    const ShowRepos= () => {
        if(!_.isEmpty(repos)){
           return (
                repos.map(el => {
                    return (
                    <li className="list-group-item" key={el.id}>
                    <div>
                        <a href={el.html_url} target="_blank" rel="noreferrer">{el.name}</a>
                    </div>
                    <p>{el.description}</p>
                    </li>
                    )
                })
            )
        }else{
            return (
                <li>NO POSEE REPOSITORIOS</li>
            );
        }
    }

    return (
        <div className="container m-3">
            <div className="row justify-content-md-center">
                <div className="col-4">
                    <div className="card">
                        <h5 className="card-header">{data.name}</h5>
                        <div className="card-body">
                            <img src={data.avatar_url} className="card-img-top" alt="..."></img>
                            <h5 className="card-title">{data.login}</h5>
                            <p className="card-text">{data.bio}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">GITHUB: <a href="#" className="stretched-link">{data.url}</a></li>
                                <li className="list-group-item">BLOG: <a href="#" className="stretched-link">{data.blog !== null ? data.blog : 'No posee'}</a></li>
                                <li className="list-group-item">EMAIL: {data.email !== null ? data.email : 'No posee'}</li>
                            </ul>
                            <div className="card">
                                <div className="card-header">
                                    REPOSITORIOS
                                </div>
                                <ul className="list-group list-group-flush">
                                    {ShowRepos()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default GithubDataComponent
