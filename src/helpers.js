import { ipcRenderer } from 'electron'
module.exports = {
    resolveSave: (err) => {
        if(err) {
            return ipcRenderer.send('show-dialog', {type: 'error', title: 'Image Editor', message: `Ha habido un error durante el guardado: ${err}`})
        }
        return ipcRenderer.send('show-dialog', {type: 'warning', title: 'Image Editor', message: 'La imagen fue guardada correctamente.'})
    }
}