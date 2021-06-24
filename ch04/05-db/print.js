const DB_PATH=__dirname+"/jpub.sqlite";

const sqlite3=require('sqlite3').verbose();

const db=new sqlite3.Database(DB_PATH);

const BASE_URL="http://jpub.tistory.com/category/"+ encodeURIComponent("제이펍의 도서");
const PAGE_NUM=6;

const client=require('cheerio-httpcli');
const fs=require('fs');
const urlType=require('url');

const booklist=[];

scrape(1);

function scrape(page){
	if(page> PAGE_NUM){
		dbinsert();
		return;
	}
	const VISIT_URL=BASE_URL+"?page="+page;
	
	client.fetch(VISIT_URL,function(err,$,res){
		if(err){
			console.log("DL error");
			return;
		}
		const tr=$("#searchList > ol > li >span.list > a");
		if(!tr){console.log("error");return;}
		
		for(let i=0;i<tr.length;i++){
			const book=tr.eq(i).text();
			booklist.push(book);
		}
		scrape(page+1);
	});
}

function dbinsert(){
	db.serialize(function(){
		db.run("CREATE TABLE IF NOT EXISTS BOOK("+"id INTEGER PRIMARY KEY,"+ "token TEXT)");
		const ins_stmt=db.prepare(
		'insert into book (token)'+ 'values(?)');
		booklist.forEach(function(value,idx,arr){
			const words=value.split("");
			for(let i in words){
				ins_stmt.run(words[i]);
			}
		});
		ins_stmt.finalize();
		
		console.log("집계 결과");
		db.each("select token, count(token) as cnt "+
			   "from book group by token having cnt >3 "+
			   	"order by cnt desc",
				function(err,row){
				console.log(row.cnt+"회:"+row.token);
				}
		);
	});
}