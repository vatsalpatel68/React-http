import React ,{ Component } from 'react';
import axios from 'axios';
class PostList extends Component{
    constructor()
    {
        super();
        /*
        this.state = {
            data : [{
                name:'vatsal'
            },{
                name:'deep'
            }]
        }*/

        this.state = {
            data : ''
        }
    }
    componentDidMount(){
        /*axios.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(this.state.data))
        .then(response => {
            console.log(response);
            
        }).catch(error => {console.log(error);})*/
        fetch("http://localhost:5000/sample/1").then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error);
        })
    }
    render(){

        return(
            //this is a Return function.
            <h1>Hello world</h1>
        )
        
    }
}

export default PostList;