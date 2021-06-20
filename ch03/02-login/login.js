const casper=require('casper').create({verbose:true,logLevel:"debug"});
const url="https://090k.tistory.com/admin/center";

const id=;
const password=;

casper.start();
casper.open(url);

casper.then(function(){
	casper.mouseEvent('click',".btn_login");
})


casper.then(function(){
	casper.fill("#login-form",{
		email:id,password:password
	},true);
	casper.capture('login1.png');
	casper.mouseEvent('click',".wrap_btn > .btn_confirm");
	casper.capture('login2.png');
	const getPage=function(){
		return document.querySelector('html').innerText;
	};
	console.log(this.evaluate(getPage));
	casper.capture('login3.png');
	casper.wait(3000);
});


casper.then(function(){
	casper.capture('login5.png');
});

casper.run();