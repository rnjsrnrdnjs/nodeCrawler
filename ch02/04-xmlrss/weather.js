var RSS="http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109";

var parseString=require('xml2js').parseString;
var request=require('request');

request(RSS,(err,res,body)=>{
	if(!err && res.statusCode==200){
		analtzeRSS(body);
	}
});

function analtzeRSS(xml){
	parseString(xml,(err,obj)=>{
		 if (err) { 
      console.log(err); return; 
    }
    // 기상 예보 정보 출력 ----- (※3)
    //console.log(JSON.stringify(obj)); // ----- (※4)
    var datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;
    var city  = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;    
    for (var i in datas) {      
      var data = datas[i];      
      console.log(city + " " + data.tmEf + " " + data.wf + " " + data.tmn + "~" + data.tmx);
    }
	});
}