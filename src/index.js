console.log('eletron run');

const eletron = require('electron');
const app = eletron.app;
const BrowserWindow = eletron.BrowserWindow;
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow();
    win.loadURL('http://localhost:8001')
    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}
app.allowRendererProcessReuse = true;
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})