import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Films from './Films';
import "./App.css";

class Card extends Component{
  render(){
  return (
    <Popup
    trigger={<div className="tc pa4 bg-white dib br4 ma2 grow bw2">
        <h3>{this.props.name}</h3>
    </div>
    }
    modal//disapear whenever you click somewhere else and position at the center
    //position="right center" ---on the right side of trigger
    //closeOnDocumentClick
    closeOnEscape
    contentStyle={{
      borderRadius:"5%",
      padding:"20px",
      background: "black",
      border: "1px solid grey",
      width: "auto",
      minWidth:"40%",
      height: "auto"
    }}
    >
      <div className="tc">
      <h1>{this.props.name}</h1>
      </div>
      <div style={{color:"white"}} className="tc f6">
        <p>Height: {this.props.height} cm</p>
        <p>Mass: {this.props.mass} kg</p>
        <p>Hair Color: {this.props.hair_color.toUpperCase()}</p>
        <p>Eye Color: {this.props.eye_color.toUpperCase()}</p>
        <p>Birth Year: {this.props.birth_year}</p>
        <p>Gender: {this.props.gender.toUpperCase()}</p>
        <div className="pa1">
          <Films films={ this.props.films }/>  
        </div>
      </div>
    </Popup>
  );}
}

export default Card;
