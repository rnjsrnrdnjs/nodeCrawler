const client=require('cheerio-httpcli');

const url="https://solved.ac/profile/rnjsrnrdnjs";

const param={}

client.fetch(url,param,(err,$,res)=>{
	if(err){
		console.log(err);
		return;
	}
	const body=$.html();
	
	console.log(body);
});