var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var Menu = require('menu');
var Tray = require('tray');
var dialog = require('dialog');
require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {   
    mainWindow = new BrowserWindow({ width: 500, height: 300 });    
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    //mainWindow.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    adicionaIconeDeTray();
});

function adicionaIconeDeTray() {
    var appIcon = new Tray('cwi.png');

    appIcon.on('clicked', function () {
        //inserir chamada da janela aqui
    });

    var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1' }
    ]);

    appIcon.setToolTip('CWI Software');
    appIcon.setContextMenu(contextMenu);
}