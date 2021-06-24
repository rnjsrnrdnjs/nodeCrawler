const exec=require('child_process').exec;
const Youtube=require('youtube-node');
const youtube=new Youtube();

youtube.setKey('');

let keyword="치킨";
let limit=2;

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
		downloadVideo(video_id);
	}
});

function downloadVideo(video_id){
	const url="https://www.youtube.com/watch?v=" +video_id;
	exec('youtube-dl '+url,function(err,stdout,stderr){
		if(err){console.log(err);return;}
		if(stdout)console.log(stdout);
		if (stderr)console.log(stderr);
	});
}