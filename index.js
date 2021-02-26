const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules/.bin/electron"),
});

ipcMain.handle("fs.list_dir", (path) => {
  console.log("lsit.dir");
  return 1;
});

ipcMain.handle("fs.what", (path) => {
  console.log("lsit.dir");
  return 0;
});
function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 786,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    // preload: "./preload.js",
  });
  win.loadURL("http://localhost:8080/");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
