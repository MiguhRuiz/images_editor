const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const { loadImages } = require('./utilities')

let win

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            devTools: true
        }
    })
    win.loadURL(`file://${__dirname}/build/index.html`)
})

ipcMain.on('open-dialog', (event) => {
    dialog.showOpenDialog(win, {
        title: 'Selecciona una carpeta para añadirla',
        defaultPath: '~/Images',
        buttonLabel: 'Seleccionar carpeta',
        properties: ['openDirectory']
    }, (dir) => {
        if(dir) {
            loadImages(event, dir[0])
        }
    })
})

ipcMain.on('save-dialog', (event, args) => {
    dialog.showSaveDialog(win, {
        title: 'Selecciona un directorio para guardarla',
        buttonLabel: 'Guardar Imagen',
        filters: [{ name: 'picture', extensions: [args.substr(1)] }]
    }, (path) => {
        if(path) {
            event.sender.send('save-image', path)
        }
    })
})

ipcMain.on('show-dialog', (event, args) => {
    dialog.showMessageBox(win, args)
})