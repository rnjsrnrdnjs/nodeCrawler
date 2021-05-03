var client= require('cheerio-httpcli');
var request=require('request');
var fs=require('fs');
var urlType=require('url');

var savedir=__dirname+"/img";
if(!fs.existsSync(savedir)){
	fs.mkdirSync(savedir);
}

var url="https://ko.wikipedia.org/wiki/"+ encodeURIComponent("강아지");
var param={};

client.fetch(url,param,function(err,$,res){
	if(err){
		console.log("err! :",err );
		return;
	}
	$("img").each(function(idx){
		var src=$(this).attr('src');
		var result=urlType.resolve(url,src);
		
		var fname=urlType.parse(result).pathname;
		fname=savedir+"/"+fname.replace(/[^a-zA-Z0-9\.]+/g,'_');
		
		request(result).pipe(fs.createWriteStream(fname));
		console.log(result);
	});
});