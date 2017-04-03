const types ={
    loginScreen:'LoginScreen',
    homeScreen:'HomeScreen',
    tweetScreen:'TweetScreen'
}

export const reducer = (state = {}, action) => {
    switch(action.type){
        case 'LoginScreen':
        return {
            ...state,
            params: action.payload
        }
        break;
        case 'HomeScreen':
        return {
            ...state,
            params: action.payload
        }
        break;
        case 'TweetScreen':
        return {
            ...state,
            params: action.payload
        }
        break;
        default:
    }
    return state;
}

export const actionCreators = {
    storeUserInfo(params){
        return {
            type:types.loginScreen,
            payload: params
        }
    },
    storeFilterSettings(params){
        return {
            type:types.homeScreen,
            payload: params
        }
    }
}