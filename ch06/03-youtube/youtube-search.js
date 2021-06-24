const Youtube=require('youtube-node');
const youtube=new Youtube();

youtube.setKey('');

let keyword='아이즈원';
let limit=3;

youtube.search(keyword,limit,function(err,result){
	if(err){console.log(err); return;}
	console.log(JSON.stringify(result,null,2));
});