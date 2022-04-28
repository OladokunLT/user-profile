import React, {Component} from "react";
import './User.css';
class User extends Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            users: [],
            DataisLoaded: false
        };
    }
   
     
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({
                    users: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, users } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Problem encountered. May take longer time to connect ... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                users.map((user) => (
                <ol key = { user.id } >
                    User_Name: { user.username }, 
                    Full_Name: { user.name }, 
                    User_Email: { user.email }
                    User_address:  { user.address.street }
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default User;