'use strict';

var app = require('electron').app;
var el = require('electron')
var BrowserWindow = require('electron').BrowserWindow;
var mainWindow = null;
var ipc = require('electron').ipcMain;
const { ipcRenderer } = require('electron');

ipc.on('close-main-window', function() {
    app.quit();
});
// app.commadLine.appendSwitch('enable-usermedia-screen-capturing')
app.on('ready', function() {
   
    mainWindow = new BrowserWindow({
        resizable: true,
        height: 600,
        width: 800,
        icon: 'icon.png',
          webPreferences: {
      nodeIntegration: true,  // Allow node.js features in the renderer process
      contextIsolation: false,  // Allow access to Node.js APIs in renderer
      webSecurity: false,
    }
    });

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
     mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
