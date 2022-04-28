import React, {Component} from "react";
import './User.css';
class User extends Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            users: [],
            getUserInfo: false
        };
    }
   
     
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data) // this confirmed that data is collected
                this.setState({
                    users: data,
                    getUserInfo: true
                });
            })
    }
    render() {
        const { getUserInfo, users } = this.state;
        if (getUserInfo === false) return 
            <p> Internet connection is require to load your request.</p>;
        
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