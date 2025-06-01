import React from "react";
import { getUsers } from "../../API";

class UserList extends React.Component {
constructor(props){
    super(props)
    this.state={
        users:[]
    }
}
componentDidMount(){
getUsers().then(data =>{
    const{results} = data;

    this.setState({
        users: results
    })
})
}

render(){
    return(
        <ul>

        </ul>
    )
}
}

export default UserList;