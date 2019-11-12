import React from 'react';
import {withRouter} from 'react-router-dom'

let Row = props => {
    console.log(props);
    return (
        <>
            <h3>{props.name}</h3>
            <p>{props.phone}</p>
            <button onClick={
                ()=>{props.history.push('/contacts/' + props.name.toLowerCase())}
            }>Open View</button>
        </>
    );
};

export default withRouter(Row);
