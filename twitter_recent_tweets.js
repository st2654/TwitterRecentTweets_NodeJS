// Program in NodeJS
// Note: npm install twitter
var Twitter = require('twitter');
var fs = require('fs');

var client = new Twitter({
	//Fill in Consumer keys and Access token from your twitter app
consumer_key : '',
consumer_secret : '',
access_token_key : '',
access_token_secret : ''
});


client.get('https://api.twitter.com/1.1/statuses/home_timeline.json',function(error,response){
	var recent_tweets = "";
	console.log(response.length);
	for(i = 0;i<response.length;i++){
		recent_tweets= recent_tweets.concat("Tweet # ").concat(i+1).concat(" ").concat(response[i]['text']).concat("\n");
	}

	fs.writeFile('recent_tweets.txt',recent_tweets,function (err){
		if(err) throw err;
	});
	console.log("Response saved to recent_tweets.txt");
});

console.log("Done");

