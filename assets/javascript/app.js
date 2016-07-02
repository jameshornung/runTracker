// var activeKey = '&api_key=tts32rcx99fc2hps6ca5yrt8';
// var city='austin';
// var state='TX';
// var event='marathon';
// var start='2016-01-01..';
// var queryURL = 'http://api.amp.active.com/search?&city='+city+'&state='+state+'&query='+event+'&start_date='+start+activeKey;



// $.ajax({url: queryURL, method: 'GET', dataType: 'jsonp', crossDomain: 'true'}).done(function(response){
// 	console.log(response);
// });

//ADD NEW RACES FROM INPUT FORM AND STORE THE DATA ON FIREBASE
var raceInfo = new Firebase("https://raceinfo.firebaseio.com/");

$('#add-race').on('click', function(){
	var race = $('#race').val().trim();
	var distance = $('#distance').val().trim();
	var year = $('#year').val().trim();
	var hours = $('#hours').val().trim();
	var minutes = $('#minutes').val().trim();
	var seconds = $('#seconds').val().trim();
	
	//Display time
	if(hours){
		var time = (hours + ':' + minutes + ':' + seconds);
	}
	else{
		var time = (minutes + ':' + seconds)
	};
	// Determine Pace
	var paceHours = parseInt((hours) * 60) * 60;
	var paceMinutes = parseInt(minutes * 60);
	var paceSeconds = parseInt(seconds);
	var runningSeconds = paceHours + paceMinutes + paceSeconds;

	if(distance == '5K'){
		console.log('5k distance selected')
		var secondsPerMile = Math.round(runningSeconds / 3.1);
		var displayMinutes = Math.floor(secondsPerMile / 60);
		var displaySeconds = runningSeconds % 60;
		var pace = displayMinutes + ':' + displaySeconds;
	}
	else if(distance == '10K'){
		console.log('10k distance selected');
		var secondsPerMile = Math.round(runningSeconds / 6.2);
		var displayMinutes = Math.floor(secondsPerMile / 60);
		var displaySeconds = runningSeconds % 60;
		var pace = displayMinutes + ':' + displaySeconds;
	}
	else if(distance =='10 Mile'){
		console.log('10 mile distance selected');
		var secondsPerMile = Math.round(runningSeconds / 10);
		var displayMinutes = Math.floor(secondsPerMile / 60);
		var displaySeconds = runningSeconds % 60;
		var pace = displayMinutes + ':' + displaySeconds;
	}
	else if(distance == 'Half Marathon'){
		console.log('half marathon distance selected');
		var secondsPerMile = Math.round(runningSeconds / 13.1);
		var displayMinutes = Math.floor(secondsPerMile / 60);
		var displaySeconds = runningSeconds % 60;
		var pace = displayMinutes + ':' + displaySeconds;
	}
	else if(distance == '30K'){
		console.log('30k distance selected');
		var secondsPerMile = Math.round(runningSeconds / 18.6);
		var displayMinutes = Math.floor(secondsPerMile / 60);
		var displaySeconds = runningSeconds % 60;
		var pace = displayMinutes + ':' + displaySeconds;
	}
	else if(distance == 'Marathon'){
		console.log('marathon selected');
		var secondsPerMile = Math.round(runningSeconds / 26.2);
		var displayMinutes = Math.floor(secondsPerMile / 60);
		var displaySeconds = runningSeconds % 60;
		var pace = displayMinutes + ':' + displaySeconds;
	}
	else{
		var pace = 'N/A';
	};

	var newRace = {
		race: race,
		distance: distance,
		time: time,
		year: year,
		pace: pace
	}
	

	raceInfo.push(newRace);

	$('#race').val('');
	$('#distance').val('');
	$('#year').val('');
	$('#hours').val('');
	$('#minutes').val('');
	$('#seconds').val('');

	return false;
});

raceInfo.on('child_added', function(childSnapshot){
	var race  = childSnapshot.val().race;
	var distance = childSnapshot.val().distance;
	var year = childSnapshot.val().year;
	var time = childSnapshot.val().time;
	var pace = childSnapshot.val().pace;

	$('#race-table > tbody').append('<tr><td>' + race + '</td><td>' + distance + '</td><td>' + year + '</td><td>' + time + '</td><td>' + pace + '</td></tr>');
});