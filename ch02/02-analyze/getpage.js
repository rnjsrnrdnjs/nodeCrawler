var client=require('cheerio-httpcli');

var url="http://jpub.tistory.com";
var param={};

client.fetch(url,param,(err,$,res)=>{
	if(err){
		console.log("err:",err);
		return;
	}
	$("a").each(function(idx){
		var urlType=require('url');
		var text=$(this).text();
		var href=$(this).attr('href');
		if(!href)return;
		console.log(urlType.resolve(url,href));
	});
});