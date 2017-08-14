import React from 'react'

import ImageItem from '../ImageItem'

class ImagesList extends React.Component {
    componentDidMount() {
        const element = document.getElementsByClassName('images-list')[0]
        const firstChild = element.children[0]
        firstChild.classList.add('selected')
    }
    render() {
        return(
            <div className="images-list">
            {
                this.props.images.map(image => (
                    <ImageItem {...image} showPicture={this.props.showPicture} />
                ))
            }
            </div>
        )
    }
}

export default ImagesList