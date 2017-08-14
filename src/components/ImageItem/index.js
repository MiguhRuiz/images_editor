import React from 'react'

class ImageItem extends React.Component {
    constructor(props) {
        super(props)

        this.selectPicture = this.selectPicture.bind(this)
    }
    selectPicture(event) {
        const oldEl = document.querySelector('.selected')
        if(oldEl.classList.contains('selected')) {
            oldEl.classList.remove('selected')
        }

        const newEl = event.target
        newEl.classList.add('selected')

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