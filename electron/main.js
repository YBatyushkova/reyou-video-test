const path = require('path');
const url = require('url');
const {app, BrowserWindow, ipcMain} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        fullscreen: true,
        webPreferences: { nodeIntegration: true }
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `../dist/test/index.html`),
            protocol: 'file:',
            slashes: true,
        })
    );

    win.on('closed', () => win = null);

    // listenIpcMessages(win);
}

app.on('ready', createWindow);
