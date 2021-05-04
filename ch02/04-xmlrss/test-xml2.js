var parseString=require('xml2js').parseString;

var xml="<fruits shop='AAA'>"+"<item price='140'> BANANA </item>"+"<item price='200'> APPLE </item>"+"</fruits>"
parseString(xml,function(err,result){
	console.log(JSON.stringify(result));
});

parseString(xml,(err,result)=>{
	console.log(JSON.stringify(result));
	
	var shop=result.fruits.$.shop;
	console.log(shop);
	var items=result.fruits.item;
	for(var i in items){
		var item=items[i];
		console.log("--"+item._);
		console.log(item.$.price);
	}
	
});