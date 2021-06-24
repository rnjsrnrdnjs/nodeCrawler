const Mecab=require('./mecab-mod.js');
const mecab=new Mecab();

const text="나는 무엇을 위해 공부하는것인가?";

mecab.parse(text,function(items){
	for(let i in items){
		const k=items[i];
		if(k=="EOS")continue;
		console.log(k[0]+":"+k[1]);
	}
});