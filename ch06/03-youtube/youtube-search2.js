const Youtube=require('youtube-node');
const youtube=new Youtube();

youtube.setKey('');

let keyword="purple";
let limit=5;

youtube.addParam('order','rating');
youtube.addParam('type','video');
youtube.addParam('videoLicense','creativeCommon');

youtube.search(keyword,limit,function(err,result){
	if(err){
		console.log(err);
		return;
	}
	const items=result["items"];
	
	for(let i in items){
		const it=items[i];
		const title=it["snippet"]["title"];
		const video_id=it["id"]["videoId"];
		const url="https://www.youtube.com/watch?v=" +video_id;
		
		console.log(title);
		console.log(url);
	}
});
