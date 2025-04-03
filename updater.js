const { autoUpdater } = require("electron-updater");

autoUpdater.on("update-available", () => {
    console.log("Nova atualização disponível!");
});

autoUpdater.on("update-downloaded", () => {
    console.log("Atualização baixada, aplicando...");
    autoUpdater.quitAndInstall();
});

autoUpdater.checkForUpdatesAndNotify();
