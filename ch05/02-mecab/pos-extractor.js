const fs=require('fs');
const Mecab=require('./mecab-mod.js');
const mecab=new Mecab();

const args=process.argv;
args.shift();
args.shift();

if(args.length!=2){
	console.log('re try');
	process.exit();
}

const inputfile=args.shift();
let txt=fs.readFileSync(inputfile,'utf-8');

const targetPos=args.shift();

mecab.parse(txt,function(items){
	for(let i in items){
		const k=items[i];
		const word=k[0];
		const pos=k[1];
		
		if(k=="EOS")continue;
		
		if(pos==targetPos)console.log(word);
	}
});