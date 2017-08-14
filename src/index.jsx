import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import ImagesList from './components/ImagesList'

import initialImages from './initialImages'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: initialImages,
            currentImage: '#'
        }
        this.showPicture = this.showPicture.bind(this)
    }
    showPicture(imageUrl) {
        this.setState({ currentImage: imageUrl })
    }
    render() {
        return(
            <div className="App">
                <Header />
                <div className="Image-Display">
                    <ImagesList images={this.state.images} showPicture={this.showPicture}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))