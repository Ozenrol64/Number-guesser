const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 200
    })
    win.setMenuBarVisibility(false)
    win.loadFile('index.html')
    //win.setIcon()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})