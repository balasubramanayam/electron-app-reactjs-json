
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const URL = require('url');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self' http://localhost:5000;",
        ],
      },
    });
  });

 

  const startUrl = URL.format({
    pathname: path.join(__dirname, './crud/build/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  
mainWindow.loadURL(startUrl);


//mainWindow.loadFile('D:/Electron/electron-app/crud/build/index.html'); 
//mainWindow.loadURL('http://localhost:3000');
//mainWindow.loadURL('https://esignzstaging.relevantz.com');

mainWindow.webContents.openDevTools();

mainWindow.webContents.on('context-menu', (event, params) => {
    const menu = Menu.buildFromTemplate([
      {
        label: 'Inspect',
        click: () => {
          mainWindow.webContents.inspectElement(params.x, params.y);
        },
      },
    ]);
    menu.popup(mainWindow);
  });

  mainWindow.setFullScreen(true); 
  mainWindow.setKiosk(false);
 
});  