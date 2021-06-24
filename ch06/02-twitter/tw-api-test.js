const Twit=require('twit');

const T=new Twit({
	consumer_key:'',
	consumer_secret:'',
	access_token:'',
	access_token_secret:'',
});

const stream=T.stream('statuses/filter',{track:'JavaScript'});

stream.on('tweet',function(tw){
	const text=tw.text;
	const user_name=tw.user.name;
	console.log(user_name+"> "+text);
})