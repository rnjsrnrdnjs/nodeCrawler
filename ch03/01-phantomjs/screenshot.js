const casper=require('casper').create();

casper.start();


casper.viewport(1400,800);

casper.userAgent('User-Agent:Mozilla/5.0 (windows NT 6.1; WOW64) AppleWebkit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36');

casper.open('https://solved.ac/profile/rnjsrnrdnjs');

casper.then(function(){
	casper.capture('screenshot2.png',{
		top:0,left:0,width:1400,height:800,
	});
});

casper.run();