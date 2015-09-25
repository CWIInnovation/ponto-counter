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
    criaJanelaPrincipal();    
    adicionaIconeDeTray();

    //mainWindow.openDevTools();
});

function adicionaIconeDeTray() {
    var appIcon = new Tray('cwi.png');
    appIcon.setToolTip('CWI Software');;

    appIcon.on('clicked', function () {
        mainWindow.show();
    });    
}

function criaJanelaPrincipal() {
    mainWindow = new BrowserWindow({ width: 500, height: 320, show: false });
    mainWindow.loadUrl('file://' + __dirname + '/index.html');    

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

