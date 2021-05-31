import React from 'react';
//scroll wraps whatever is inside it ---that is children
function Scroll(props){
    return (
        <div style={{overflowY:'scroll',border:'1px solid yellow',height:'900px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;