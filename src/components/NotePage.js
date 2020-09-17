import React from 'react';

const NotePage = props =>{
    return (
    
            <div className="jumbotron">
                <div>{props.children}</div>
            </div>
        );
    }
export default NotePage