var client =require('cheerio-httpcli');
var urlType=require('url');

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
		console.log(result);
	});
});