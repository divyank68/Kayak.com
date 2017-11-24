import React,  {Component} from 'react'

import request from 'axios';

class SignUp extends Component{

    state = {
            email:"a@gmail.com",
            password:"password",
            first_name:"Akshay",
            last_name:"Mishra",        
            address:"3rd Street",
            city:"San Jose",
            state:"CA",
            zip_code:95113,
            phone:669269999,
            trip_id:123,
            image:"https://r3.whistleout.com.au/public/images/articles/2016/01/traveller.jpg",
            credit_card:1234567890,
            user_status:1        
    };

    renderSignup() {
        if(!this.props.isLoggedIn){
            return(                
                <div>                    
                    <label>Email</label><input type="email" ref="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                    
                    <label>Password</label><input type="password" ref ="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>First name</label><input type="text" ref ="first_name" value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>                    
                    <label>Last name</label><input type="text" ref ="last_name" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>   
                    <label>Address</label><input type="text" ref ="address" value={this.state.address} onChange={e => this.setState({ address: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>                             
                    <label>City</label><input type="text" ref ="city" value={this.state.city} onChange={e => this.setState({ city: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                
                    <label>State</label><input type="text" ref ="state" value={this.state.state} onChange={e => this.setState({ state: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                
                    <label>Zip Code</label><input type="number" ref ="zip_code" value={this.state.zip_code} onChange={e => this.setState({ zip_code: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                
                    <label>Phone</label><input type="number" ref ="phone" value={this.state.phone} onChange={e => this.setState({ phone: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                
                    <label>Trip ID</label><input type="number" ref ="trip_id" value={this.state.trip_id} onChange={e => this.setState({ trip_id: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>Image</label><input type="text" ref ="image" value={this.state.image} onChange={e => this.setState({ image: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                    
                    <label>Credit Card</label><input type="number" ref ="credit_card" value={this.state.credit_card} onChange={e => this.setState({ credit_card: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <input type="hidden" ref ="user_status" value="1" onChange={e => this.setState({ trip_id: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <button onClick={()=>{this.props.handleSignup(this.state)}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Signup</button><br/>                                                   
                    <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>                                                   
                </div>
            )
        }
    }

	render(){
        return (                          
            <div>
                {this.renderSignup()}
            </div>                            
        );
	}
}

export default SignUp;
