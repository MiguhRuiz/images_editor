import React from 'react'

class ImageItem extends React.Component {
    constructor(props) {
        super(props)

        this.selectPicture = this.selectPicture.bind(this)
    }
    selectPicture() {
        const el = document.querySelector('.list-group-item')
        el.classList.add('selected')
        this.props.showPicture(this.props.src)
    }
    render() {
        return(
            <li className="list-group-item" onClick={this.selectPicture}>
                <img className="media-object pull-left" src={this.props.src} height="32" />
                <div className="media-body">
                <strong>{this.props.filename}</strong>
                <p>{this.props.size}</p>
                </div>
            </li>
        )
    }
}

export default ImageItem