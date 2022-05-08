import React from "react";

class AddContact extends React.Component{

    constructor(props) {
      super(props)
    
      this.state = {
         name : "",
         email : "",
      }
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name ==="" || this.state.email === ""){
            alert("All fields are mandatory");
            return
        }
        this.props.AddContactHandler(this.state);
        this.setState({name:"", email:""});
    }
    render(){
        return(
            <div>
                <h2>Add Contact</h2>
                <form onSubmit={this.add}>
                    <div>
                        <label>Name</label><br />
                        <input type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => this.setState({name : e.target.value})}
                        placeholder="Name" />
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input type="text"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email : e.target.value})}
                        placeholder="E-Mail" />
                    </div>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;