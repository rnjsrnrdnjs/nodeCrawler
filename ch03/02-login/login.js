const casper=require('casper').create();
const utils=require('utils');
/*({verbose:true,logLevel:"debug"})*/
const url="https://090k.tistory.com/admin/center";

const id="";
const password="";

casper.start();
casper.viewport(1024,768);
casper.open(url);

casper.then(function(){
	this.capture('login1.png',{
		top:0,left:0,width:1024,height:768
	});
});

casper.then(function(){
	if(this.exists('a.btn_login.link_kakao_id')){
		this.echo('btn exists!');
		this.click('a.btn_login.link_kakao_id');

	}
});

casper.then(function(){
	this.capture('login2.png',{
		top:0,left:0,width:1024,height:768
	});
});

casper.then(function(){
	casper.sendKeys('input#id_email_2.tf_g.tf_email',id);
	casper.sendKeys('input#id_password_3.tf_g',password);
})

casper.then(function() { 
	this.click('button.btn_g.btn_confirm.submit'); 
});

casper.then(function(){
	this.capture('login3.png',{
		top:0,left:0,width:1024,height:768
	});
});

casper.then(function() { 
	console.log(this.getCurrentUrl()); 
})
casper.then(function() { 
	this.wait(5000, function(){
		this.echo('waiting')}); 
});

casper.then(function(){
	this.capture('login4.png',{
		top:0,left:0,width:1024,height:768
	});
});

// casper.open 으로 로그인한후 이동할 위치 간후

// 그뒤에 마찬가지로 작업을 해주면된다.
casper.run();