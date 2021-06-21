const electron=require('electron');
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;

app.on('ready',function(){
	win=new BrowserWindow({
		width:800,
		height:600
	});
	win.loadURL(__dirname+'/index.html');
	won.on('closed',function(){
		win=null;
	});
})