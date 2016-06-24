// var activeKey = '&api_key=tts32rcx99fc2hps6ca5yrt8';
// var city='austin';
// var state='TX';
// var event='marathon';
// var start='2016-01-01..';
// var queryURL = 'http://api.amp.active.com/search?&city='+city+'&state='+state+'&query='+event+'&start_date='+start+activeKey;



// $.ajax({url: queryURL, method: 'GET', dataType: 'jsonp', crossDomain: 'true'}).done(function(response){
// 	console.log(response);
// });

var raceInfo = new Firebase('https://raceinfo.firebaseio.com/');
