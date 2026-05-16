const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  url: "http://localhost:5000"
});