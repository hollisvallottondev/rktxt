import React from 'react'; 
import './styles.css'; 

const Note = ( { text, title, props } ) => {
    return(
        <div>
            <div>
                <p>{ title || "Title here" }</p>
            </div>
            <div> 
                <textarea value = { text } />
            </div>
        </div>
    );
}

export default Note; 



