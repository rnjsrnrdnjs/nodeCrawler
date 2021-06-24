const fs=require('fs');
const execSync=require('child_process').execSync;

const srcText="찾아라. 그러면 발견할 것이다.\n";

parse(srcText,function(result){
	for(let i in result){
		const word=result[i][0];
		const pos=result[i][1];
		if(word=="EOS")continue;
		console.log(word+":"+pos);
	}
});

function parse(text,callback){
	fs.writeFileSync("TMP_INPUT_FILE",text,"utf-8");
	
	const cmd=[
		'mecab',
		'TMP_INPUT_FILE',
		'--output=TMP_OUTPUT_FILE'
	].join(" ");
	
	const opt={encoding:'utf-8'};
	let res=[];
	try{
		execSync(cmd,opt);
		res=fs.readFileSync("TMP_OUTPUT_FILE",'utf-8');
	}catch(e){console.log(e);}
	
	res=res.replace(/\r/g,"");
	res=res.replace(/\s+$/,"");
	const lines=res.split("\n");
	
	const res2=lines.map(function(line){
		return line.replace('\t',',').split(',');
	});
	
	callback(res2);
}