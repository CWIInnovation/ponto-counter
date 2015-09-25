var app = require('app');  // Module to control application life.
var path = require('path');
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var Menu = require('menu');
var Tray = require('tray');
var dialog = require('dialog');

require('crash-reporter').start();

var mainWindow = null,
    appIcon = null;

app.on('window-all-closed', function () {
    return false;
});

app.on('ready', function () {
    criaJanelaPrincipal();
    adicionaIconeDeTray();
});

function adicionaIconeDeTray() {
    appIcon = new Tray(path.join(__dirname, 'cwi.png'));
    appIcon.setToolTip('CWI Software');;

    appIcon.on('clicked', function () {
        criaJanelaPrincipal(true);
    });
}

function criaJanelaPrincipal(showWindow) {
    if (showWindow == null) showWindow = false;

    mainWindow = new BrowserWindow({ width: 500, height: 320, icon: path.join(__dirname, 'icon.png'), show: showWindow });
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
