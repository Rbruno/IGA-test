const DefaultState = {
    loading: false,
    data: [],
    repos: [],
    errorMsg: ''
};

const GithubReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case 'GITHUB_DATA_LOADING':
            return {
                ...state,
                loading: true,
                repos: [],
                errorMsg: ''
            };
        case 'GITHUB_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
                repos: action.repos,
                errorMsg: ''
            };  
        case 'GITHUB_DATA_FAIL':
            return {
                ...state,
                loading: false,
                repos: [],
                errorMsg: 'No se encontraron resultados'
            };

        default:
            return state;
    }
}

export default GithubReducer