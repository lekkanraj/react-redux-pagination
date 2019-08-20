const IntialState={
    name:""
}
function SearchReducer(state=IntialState,data){
    switch(data.type){
        case "SEARCHMOVIE": state={
            ...state,
            name:data.name
        }
        break;
    }
    return state;
}
export default SearchReducer;