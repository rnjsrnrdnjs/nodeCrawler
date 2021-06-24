const bayes=require('bayes');
const Mecab=require('./mecab-mod.js');
const mecab=new Mecab();

let s1="장영실 그분 대단하죠. 근데 타자치기가 왜이렇게 귀찮은것 일까요?... 나는 그답을 찾지 못한것 같아요 ..";
let s2="이순신 그분도 사실 엄청 대단한 사람이잖아요. 근데 이것마저도 귀찮아요. 뭐가 귀찮은지도 모르겠고 내자신이 귀찮은것 같아요.";
let s3="귀찮은";

const classifier=bayes({
	tokenizer:function(text){return mecab.parse(text);}
});

classifier.learn(s1,'장영실');
classifier.learn(s2,'이순신');
classifier.learn(s3,'귀찮은');


categorize('장영실');
categorize('이순신');
categorize('답');

function categorize(text){
	const r=classifier.categorize(text);
	console.log("카테고리 ["+r+"] : "+text);
}