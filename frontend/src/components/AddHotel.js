import React,  {Component} from 'react'

class AddHotel extends Component{

    state = {
            hotel_id:"H1",
            hotel_name:"Hotel California",
            address:"3rd Street",
            city:"San Jose",
            state:"CA",
            zip_code:95113,
            stars:5,
            rooms:35,        
            ratings:4000, 
            reviews:3,
            room_type:"Pent House",
            price:200
    };

    renderAddHotel() {
        if(localStorage.getItem("user_status")==0){
            return(                
                <div>
                    <label>Hotel ID</label><input type="text" ref="hotel_id" value={this.state.hotel_id} onChange={e => this.setState({ hotel_id: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                    
                    <label>Hotel Name</label><input type="text" ref="hotel_name" value={this.state.hotel_name} onChange={e => this.setState({ hotel_name: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                    
                    <label>Address</label><input type="text" ref="address" value={this.state.address} onChange={e => this.setState({ address: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>City</label><input type="text" ref="city" value={this.state.city} onChange={e => this.setState({ city: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>State</label><input type="text" ref="state" value={this.state.state} onChange={e => this.setState({ state: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>Zip Code</label><input type="number" ref ="zip_code" value={this.state.zip_code} onChange={e => this.setState({ zip_code: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>Stars</label><input type="number" ref ="stars" value={this.state.stars} onChange={e => this.setState({ stars: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>                    
                    <label>Rooms</label><input type="number" ref ="rooms" value={this.state.rooms} onChange={e => this.setState({ rooms: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>   
                    <label>Ratings</label><input type="number" ref ="ratings" value={this.state.ratings} onChange={e => this.setState({ ratings: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>                             
                    <label>Reviews</label><input type="number" ref ="reviews" value={this.state.reviews} onChange={e => this.setState({ reviews: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>
                    <label>Room type</label><input type="text" ref ="room_type" value={this.state.room_type} onChange={e => this.setState({ room_type: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>
                    <label>Price</label><input type="number" ref ="price" value={this.state.price} onChange={e => this.setState({ price: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>
                    <button onClick={()=>{this.props.handleAddHotel(this.state)}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Add Hotel</button><br/>                                                   
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
                {this.renderAddHotel()}
            </div>                            
        );
	}
}

export default AddHotel;