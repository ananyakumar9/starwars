import './App.css';
import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';

class App extends Component{
  constructor()
  {
    super();
    this.state={
      characters: [],
      sfield: ''
    }
  }

  componentDidMount(){
    this.getData('https://swapi.dev/api/people/');
  }

  getData=async(link)=>{
    const f=await fetch(link);
    const page=await f.json();
    const result= page.results;
    const nextPage=page.next;
    this.setState(prevState=>({
      characters:[...prevState.characters,...result]
    }));
    if(nextPage) this.getData(nextPage.replace('http', 'https'));
  }

  onSearch=(event)=>{
    this.setState({sfield :event.target.value});
  }

  render(){
    const fr= this.state.characters.filter(character =>{
      return character.name.toLowerCase().includes(this.state.sfield.toLowerCase());
  })
      if(!this.state.characters.length){return <h1>Loading</h1>}
      else{
      return (
      <div>
        <div className="pa4">
       <h1 className="tc f1">Star Wars</h1>
       <h1 className="tc f2">May  the  force  be  with  you</h1>
       <SearchBox schange={ this.onSearch }/>
       </div>
       <div>
        <Scroll>
        <CardList characters= { fr }/>
        </Scroll>
      </div>
      </div>
      ); }
  }
}

export default App;
