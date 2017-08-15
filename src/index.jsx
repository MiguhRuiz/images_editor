import React from 'react'
import ReactDOM from 'react-dom'
import { ipcRenderer } from 'electron'

import Header from './components/Header'
import ImagesList from './components/ImagesList'
import ShowImage from './components/ShowImage'

import initialImages from './initialImages'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: initialImages,
            currentImage: initialImages[0].src
        }
        this.showPicture = this.showPicture.bind(this)
        this.applyFilter = this.applyFilter.bind(this)
    }
    showPicture(imageUrl) {
        this.setState({ currentImage: imageUrl })
        document.getElementById('filters').selectedIndex = 0
    }
    applyFilter(filter) {
        const imageObject = new Image()
        imageObject.src = this.state.currentImage

        const container = document.getElementById('image-displayed')

        filterous.importImage(imageObject)
            .applyInstaFilter(filter)
            .renderHtml(container)
    }
    componentDidMount() {
        ipcRenderer.on('load-images', (err, dir, images) => {
            this.setState({ images, currentImage: images[0].src })
        })
    }
    render() {
        return(
            <div className="App">
                <Header applyFilter={this.applyFilter}/>
                <div className="Image-Display">
                    <ImagesList images={this.state.images} showPicture={this.showPicture}/>
                    <ShowImage url={this.state.currentImage} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))