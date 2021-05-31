import React from 'react';

function SearchBox({ schange }){
    return (
        <div  className="tc">
            <input type="search" placeholder="Search character" className="pa2 w-20" onChange={schange}/>
        </div>
    );
}
export default SearchBox;