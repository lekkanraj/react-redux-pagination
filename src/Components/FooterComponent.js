import React from 'react';

class FooterComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="row pb-2">
                <div className="col-lg-12">
                    <div className="align-center">
                        <p>Movies@2019</p>
                    </div>
                </div>                
            </div>
        );
    }

}
export default FooterComponent;