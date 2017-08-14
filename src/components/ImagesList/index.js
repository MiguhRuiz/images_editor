import React from 'react'

import ImageItem from '../ImageItem'

function ImagesList(props) {
    return(
        <div className="images-list">
        {
            props.images.map(image => (
                <ImageItem {...image} showPicture={props.showPicture} />
            ))
        }
        </div>
    )
}

export default ImagesList