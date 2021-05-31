import React,{ Component } from 'react';
import Cover from './Cover';
import "./App.css";

class Films extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            ep1:false,
            ep2:false,
            ep3:false,
            ep4:false,
            ep5:false,
            ep6:false,
        }
    }
    componentDidMount(){
        this.props.films.forEach(mov=>{
            switch(mov){
                case "http://swapi.dev/api/films/1/": this.setState({ ep1:true });break;
                case "http://swapi.dev/api/films/2/": this.setState({ ep2:true });break;
                case "http://swapi.dev/api/films/3/": this.setState({ ep3:true });break;
                case "http://swapi.dev/api/films/4/": this.setState({ ep4:true });break;
                case "http://swapi.dev/api/films/5/": this.setState({ ep5:true });break;
                case "http://swapi.dev/api/films/6/": this.setState({ ep6:true });break;
                default:return;
            }
        });
    }
    render(){
        let bool = Object.values(this.state);
        let cover = Object.keys(this.state);
        return (
            <div>
                <Cover bool={bool} cover={cover}/>
            </div>
        );
    }
}

export default Films;