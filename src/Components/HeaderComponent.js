import React from 'react';

import searchmovie from '../Actions/SearchAction';
import {connect} from 'react-redux';
class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.search=this.search.bind(this);
    }
    search(e){
        this.props.searchMovies(e.target.value);
    }

    render(){
        return(            
            <div className="row pt-3 pb-3">
                <div className="col-lg-3">
                    <h3 className="float-left">Movies Catelog</h3>
                </div>
                <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder="Seach here" onChange={this.search} value={this.props.src.name}></input>
                </div>
                <div className="col-lg-3">                   
                    <div className="float-right">
                        <i className="fa fa-user"></i> Lekkan Raj <i className="fa fa-caret-down"></i>
                    </div>
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

const mapDispathchtoprops=(dispatch)=>{
    return {
        searchMovies:(name)=>{
            dispatch(searchmovie(name));
        }
    }
}

export default connect(mapStatestoProps,mapDispathchtoprops)(HeaderComponent);