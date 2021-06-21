const sqlite3=require('sqlite3').verbose();
const db=new sqlite3.Database('test.sqlite');

db.serialize(function(){
	db.run('create table if not exists items (name,value)');
	let stmt=db.prepare('insert into items values(?,?)');
	stmt.run(['banana',300]);
	stmt.run(['bana',200]);
	stmt.run(['ba',100]);
	stmt.finalize();
	
	db.each("select * from items",function(err,row){
		console.log(row.name+":"+row.value);
	});
});

db.close();