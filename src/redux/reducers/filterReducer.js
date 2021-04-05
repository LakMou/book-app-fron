const initialState = {
        title :"",
        author:""

}

const filterReducer=(state =initialState , action)=>{
    switch(action.type){

        case "UPDATE_TITLE" : return {...state, title:action.payload}
        case "UPDATE_AUTHOR" : return {...state, author:action.payload}
        default : 
        return state

    }
}

export default filterReducer 