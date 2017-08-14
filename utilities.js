const fs = require('fs')
const isImage = require('is-image')
const path = require('path')
const filesize = require('filesize')

module.exports = {
    loadImages: (event, dir) => {
        let images = []

        fs.readdir(dir, (err, files) => {
            files.map(file => {
                if(isImage(file)) {
                    let urlPath = path.join(dir, file)
                    let fileObject = {
                        src: `file://${urlPath}`,
                        filename: file,
                        size: ''
                    }
                    let stats = fs.statSync(urlPath)
                    fileObject.size = filesize(stats.size, { round: 0 })
                    images.push(fileObject)
                }
            })
            event.sender.send('load-images', dir, images)
        })
    }
}