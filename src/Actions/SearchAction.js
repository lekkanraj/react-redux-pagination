let id=0;
function searchmovie(data){
    return{
        type:'SEARCHMOVIE',
        name:data,
        id:id+1
    }
}
export default searchmovie;