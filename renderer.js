const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

function startBackend() {
  spawn("node", ["../backend/server.js"], {
    cwd: __dirname,
    shell: true
  });
}

function createWindow() {
  startBackend();

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);