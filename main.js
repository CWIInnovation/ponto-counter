var app = require('app');  // Module to control application life.
var path = require('path');
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var Menu = require('menu');
var Tray = require('tray');
var dialog = require('dialog');

var Toaster = require('./toaster/index'),
    toaster = new Toaster();

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
        mainWindow.show();
    });
}

function criaJanelaPrincipal(showWindow) {
    mainWindow = new BrowserWindow({ width: 500, height: 320, icon: path.join(__dirname, 'icon.png'), show: false });
    toaster.init(mainWindow);
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.on('close', function (e) {
        mainWindow.hide();
        e.preventDefault();
    });
}