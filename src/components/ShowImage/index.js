import React from 'react'

function ShowImage(props) {
    return(
        <div className="image-container">
            <img id="image-displayed" src={props.url} data-original="" alt="" />
        </div>
    )
}

export default ShowImage