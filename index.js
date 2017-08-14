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