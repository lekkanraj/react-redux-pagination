import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner'
class MoviesComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            search:'',
            movies:[],
            totalItems:0,
            currentPage: 1,
            perPage: 10,
            pageNumbersList:[],
            loading:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.updates = this.updates.bind(this);
        this.fetchMovies = this.fetchMovies.bind(this);
        // fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s=",{
        //     method: 'GET',  
        // })
        // .then((response)=>response.json())
        // .then((data)=>  {         
        //     this.setState({movies:data.Search,totalItems:data.totalResults}); 
        //    this.updates();
        //     }        
        // );
    }
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id),
          loading:true
        });        
        this.fetchMovies()
      }

      updates(){
        const { todos,todosTotal, currentPage, todosPerPage } = this.state;
        console.log(this.state,'this.state');
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos =todos ? todos :[];
        // Logic for displaying page numbers
        const pageNumbers = [];
        let tot=Number(this.state.totalItems);
        
        for (let i = 1; i <= Math.ceil( tot/ this.state.perPage); i++) {
          pageNumbers.push(i);          
        }
        this.setState({pageNumbersList:pageNumbers})
      }

    UNSAFE_componentWillReceiveProps(pr){
        let name=pr.src.name;       
        this.setState({search:name,currentPage:1});
        //this.fetchMovies();
        let movie=this.state.search;
        let page=this.state.currentPage;
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s="+name+"&page="+page,{
            method: 'GET',  
        })
        .then((response)=>response.json())
        .then((data)=>  {   
            console.log(data.totalResults,'Move List')   
            this.setState({movies:data.Search,totalItems:data.totalResults});
            //this.forceUpdate();
            this.updates();
            }        
        );
    }
    fetchMovies(){
        let movie=this.state.search;
        let page=this.state.currentPage;
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s="+movie+"&page="+page,{
            method: 'GET',  
        })
        .then((response)=>response.json())
        .then((data)=>  {   
            console.log(data.totalResults,'Move List')   
            this.setState({movies:data.Search,totalItems:data.totalResults,loading:false});
            //this.forceUpdate();
            this.updates();
            }        
        );
    }

   
    render(){
        const renderPageNumbers = this.state.pageNumbersList.map(number => {
            var clas='list-group-item';
            if(number===this.state.currentPage){
                clas='list-group-item  list-group-item-success';
            }
            return (
              <li className={clas}
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
            );
          });
       
        return(
            <div className="row movielist">
                <div className="col-md-12">                
                {
                    this.state.movies && this.state.movies.length > 0 ? 
                        [
                            this.state.movies.map(
                                (m,index)=>
                                    <div className="col-md-3 float-left p-2" key={index} style={{maxHeight:500}}>
                                        <div className="card">
                                            { m.Poster != 'N/A' && m.Poster.length >0 ? [
                                                <img className="card-img-top" src={m.Poster} alt={m.Title} height="190px"/>
                                            ] :
                                                <img className="card-img-top" src="logo192.png" alt={m.Title} height="190px" />
                                            }
                                            <div className="card-body">
                                                <p className="">Name :{m.Title} </p> 
                                                <p className="">Year : {m.Year} </p> 
                                                <p className="">imdbId : {m.imdbID} </p>
                                                <p className="">Type : {m.Type} </p>
                                            </div>
                                        </div>
                                    </div>
                                
                            ),
                        ]
                        : <p>'No Record Found'</p>                    
                    } 
                    
                </div>
                <div className="col-md-12 p-2">
                { this.state.loading ===true ?
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    />
                    :''
                }
                    <ul className="list-group list-group-horizontal float-right p-2">{renderPageNumbers}</ul>
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
export default connect(mapStatestoProps)(MoviesComponent);



