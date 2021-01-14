import axios from 'axios';

export const GetGithubData = (username) => async dispatch => {
    try{
        
        dispatch({
            type: 'GITHUB_DATA_LOADING'
        });

        const res = await axios.get(`https://api.github.com/users/${username}`);
        const res_repos = await axios.get(`https://api.github.com/users/${username}/repos`);
        
        dispatch({
            type: 'GITHUB_DATA_SUCCESS',
            payload: res.data,
            repos: res_repos.data
        });
    }catch(e){
        dispatch({
            type: 'GITHUB_DATA_FAIL'
        });
    }
};
