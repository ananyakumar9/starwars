import React from 'react';
import Card from './Card';

function CardList({ characters }) {
  let max=0;
  const t=characters.map((user,i)=>{
    max=i+1;
    return (
    <Card 
    key={i} 
    id={i+1} 
    name={characters[i].name}
    height= {characters[i].height}
    mass={characters[i].mass}
    hair_color={characters[i].hair_color}
    eye_color={characters[i].eye_color}
    birth_year={characters[i].birth_year}
    gender={characters[i].gender}
    films={characters[i].films}
    />
    );
    });
  return (
    <div className="tc">
      <h1>{max}</h1>
      {t}
    </div>
  );
}

export default CardList;