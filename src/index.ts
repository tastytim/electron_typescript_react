import { app, BrowserWindow, ipcMain, Menu } from "electron";
import log from 'electron-log';
import path from "path";
// import {getUsers} from './database/models/testmanager'
import "reflect-metadata"
import {AppDataSource} from './database/data-source'

import { User } from "./entities/User";



declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
let mainWindow: BrowserWindow | null;


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation:true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });
  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY + "?window=main");
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", ()=>{
  // INITIALIZE DATABASE
  AppDataSource
  // OPEN ELECTRON
  createWindow()
  
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('get-users', async(event)=>{
  console.log('RECEIVED MESSAGE FROM REACT')

  const usersRepository = AppDataSource.getRepository(User);
  const users = await usersRepository.find();
  console.log(users)
  return users;
})

// COMMUNICAZIONE CON REACT
// ipcMain.handle('get-users', async(event)=>{
//   const usersRepository = AppDataSource.getRepository(User);
//   const users = await usersRepository.find();

//   console.log(users)
//   log.info('I DATI DA PASSARE' ,users)
//      mainWindow.webContents.send('users:list', users);
// });

