const MAX_WORD=40;

const Mecab=require('./mecap-mod-sync.js');
const mecab=new Mecab();
const fs=require('fs');
const lineByLine=require('n-readlines');

const args=process.argv;
args.shift();
args.shift();
if(args.length<=0){
	console.log('return');
	process.exit();
}

const filename=args.shift();

const liner=new lineByLine(filename);

let line;
let lineno=1;

while(line=liner.next()){
	const res=mecab.parse(line);
	checkSentence(line,res,lineno);
	lineno++;
}

function checkSentence(line,items,lineno){
	let cnt=0;
	let cur=[];
	let conj={};
	let word,pos,it;
	for(let i in items){
		it=items[i];
		word=it[0];
		pos=it[1];
		if(word=="EOS"){
			for(let j in conj){
				if(conj[j]>1){
					console.log('한줄에 같은 접속사 가 여러번 사용');
				}
			}
		}
		cur=[];
		cnt=0;
		conj={};
		continue;
	}
	
	cur.push({word:word,pos:pos});
	if(word=="."){
		if(cnt>=3){
			console.log('조사가 여러번 사용')
		}
		if(cur.length>=MAX_WORD){
			console.log('너무긴 문장 길이');
		}
		cnt=0;
		cur=[];
	}
	if(it[0]=='의' && it[1]=='jkg')cnt++;
	if(it[1]=="MAJ"){
		if(typeof(conj[word])=='undefined'){
		   conj[word]=1;
		}
		else{ conj[word]++;}
	}
}