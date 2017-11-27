import React,  {Component} from 'react'

class AddCar extends Component{

    state = {
            car_name:"Prius",            
            car_type:"Sedan",
            price:"200",
            departure:"2017-11-23 23:27:39",
            details:"excellent condition"
    };

    renderAddCar() {
        if(localStorage.getItem("user_status")==0){
            return(                
                <div>                    
                    <label>Car Name</label><input type="text" ref="car_name" value={this.state.car_name} onChange={e => this.setState({ car_name: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                    
                    <label>Car Type</label><input type="text" ref="car_type" value={this.state.car_type} onChange={e => this.setState({ car_type: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>Price</label><input type="text" ref="price" value={this.state.price} onChange={e => this.setState({ price: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                    
                    <label>Details</label><input type="text" ref ="details" value={this.state.details} onChange={e => this.setState({ details: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                    
                    <button onClick={()=>{this.props.handleAddCar(this.state)}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Add Car</button><br/>                                                   
                    <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>                                                   
                </div>
            )
        }
        else {
             return(                
                <div> 
                    <h1>"You are not authorized to see this page!!!"</h1>
                </div>
            );
        }
    }

	render(){
        return (                          
            <div>
                {this.renderAddCar()}
            </div>                            
        );
	}
}

export default AddCar;