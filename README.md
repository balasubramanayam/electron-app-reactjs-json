Electron Framework setup: 

Step 1: 

mkdir my-electron-app && cd my-electron-app 

npm init 

Then created package.json 

Step 2: 

npm install electron --save-dev 

Then created dependencies 

{ 

  "name": "my-electron-app", 

  "version": "1.0.0", 

  "description": "Hello World!", 

  "main": "main.js", 

  "scripts": { 

    "test": "echo \"Error: no test specified\" && exit 1" 

  }, 

  "author": "Jane Doe", 

  "license": "MIT", 

  "devDependencies": { 

    "electron": "23.1.3" 

  } 

} 
 

 

 

 

 

 

Step 3: 

Then create main.js in electron folder 

  
const { app, BrowserWindow, Menu } = require('electron'); 
const path = require('path'); 
const URL = require('url'); 
 
let mainWindow; 
 
app.on('ready', () => { 
  mainWindow = new BrowserWindow({ 
    width: 800, 
    height: 600, 
    fullscreen: true,   
   webPreferences: { 
      nodeIntegration: true, 
      contextIsolation: true, 
    }, 
  });  
 
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => { 
    callback({ 
      responseHeaders: { 
        ...details.responseHeaders, 
        'Content-Security-Policy': [ 
          "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self' http://192.168.11.70:8008/;", 
        ], 
      },     
   });  
  }); 
  
 
 
 const startUrl = URL.format({ 
    pathname: path.join(__dirname, './taskbuddy/build/index.html'), 
    protocol: 'file:', 
    slashes: true, 
  }); 
   
mainWindow.loadURL(startUrl); 
 
 
//mainWindow.loadFile('D:/Electron/electron-app/crud/build/index.html');  
//mainWindow.loadURL('http://localhost:3000'); 
//mainWindow.loadURL('https://esignzstaging.relevantz.com'); 
 
mainWindow.webContents.openDevTools(); 
 
mainWindow.webContents.on('context-menu', (event, params) => { 
    const menu = Menu.buildFromTemplate([ 
      { 
        label: 'Inspect', 
        click: () => { 
          mainWindow.webContents.inspectElement(params.x, params.y); 
        },  
      }, 
    ]); 
    menu.popup(mainWindow); 
  }); 
 
  mainWindow.reload(true); 
  mainWindow.setFullScreen(true);  
  mainWindow.setKiosk(false);  
   
});   

 

 

 

 

Step 4: 

Implement with React app so create react app and add "homepage" :  ".",  
in package.json in react app then build app using npm run build 

 

 

Step 5: 
Add build path in main.js and backend server url 

Then run using npx electron . 

If we want automatic restart use npm i nodemon in electron package.json add like this script 

"scripts": { 

  "start": "nodemon --watch main.js --exec electron ." 

} 

 
------------------------------------------------------------------------------------------------------------------ 

To improve desktop app built with React.js and Electron, enhancing functionality, optimizing performance, improving user experience, and adding advanced features.  

1. Enhance Functionality State Management: Use libraries like Redux or Context API for better state management in complex apps.  

2.Offline Support: Implement offline functionality using local storage, IndexedDB, or libraries like localforage.  

3.Database Integration: Add support for local databases like SQLite or Realm for persistent data storage.  

4.File Handling: Add functionality to read, write, or manipulate files using Electron's fs module. 

 

Improve User Experience Custom Menus:  

1.Create custom menus using Electron's Menu API to provide shortcuts and better navigation.  

2.Keyboard Shortcuts: Add global and local keyboard shortcuts using Electron's globalShortcut API.  

3.Notifications: Use Electron's Notification API to send desktop notifications for important events.  

4.Drag-and-Drop: Implement drag-and-drop functionality for files or UI elements. 

 

Optimize Performance Lazy Loading:  

1.Use React's lazy loading (React.lazy) to load components only when needed.  

2.Code Splitting: Split your React app into smaller chunks to reduce initial load time. 3.Memory Management: Optimize Electron's memory usage by closing unused windows or processes. 

Add Advanced Features Auto-Update:  

1.Use electron-updater to implement automatic updates for your app.  

2.Multi-Window Support: Add support for multiple windows using Electron's BrowserWindow.  

3.Native Features: Integrate native OS features like clipboard access, system tray, or notifications.  

4.Dark Mode: Add a toggle for light/dark mode using CSS variables or libraries like styled-components. 

 

Security Enhancements Secure CSP:  

1.Avoid using 'unsafe-inline' or 'unsafe-eval' in production. Use hashed or nonce-based CSP.  

2.Disable Node Integration: Set nodeIntegration: false in webPreferences unless necessary.  

3.Context Isolation: Ensure contextIsolation: true is enabled for better security. 

 

Distribute the App Packaging:  

1.Use electron-builder or electron-packager to package your app for Windows, macOS, and Linux.  

2.Code Signing: Sign your app for distribution on Windows and macOS.  

3.App Store Submission: Submit your app to the Microsoft Store or Mac App Store for wider distribution. 
