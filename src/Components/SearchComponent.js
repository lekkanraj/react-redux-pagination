import React from 'react';
import {connect} from 'react-redux';
class SearchComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            moviesCount:0,
        }
        let name=props.src.name;
        this.getMovies(name);
    }
    UNSAFE_componentWillReceiveProps(pr){
        let name=pr.src.name;
        this.getMovies(name);        
    }
    getMovies(name){
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s="+name,{
            method: 'GET',  
        })
        .then((response)=>response.json())
        .then((data)=>  {   
            console.log(data.totalResults,'Moveee Count')  
            var res=0;
            if(data.totalResults>0){
                res=data.totalResults;
            }
            this.setState({moviesCount:res});
            //this.forceUpdate();
            }        
        );
    }
    render(){
        return(
            <div className="row">
                <div className="col-lg-10">
                    {
                        this.props.src.name ? 
                            <h5 className="float-left">You Searched for : {this.props.src.name}, {this.state.moviesCount} results found</h5>
                        :""
                    }
                </div>                
            </div>
        );
    }

}
const mapStatestoProps=(state)=>{
    return{
        src:state.searchRed
    }
}
export default connect(mapStatestoProps)(SearchComponent);