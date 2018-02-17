const path = require("path");
const friendList = require("../data/friends.js");


module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendList);
	});

	app.post("/api/friends", function(req, res){
		var newFriendScores = [];
		var scoresArray = [];
		var friendCount = 0;
		var bestMatch = 0;

		for(var i = 0; i < friendList.length; i++){
			scoresDiff = 0;

			for(var j = 0; j < newFriendScores.length; j++){
				scoresDiff +=(Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));

			}

			scoresArray.push(scoresDiff);
		}

		for(var i = 0; i <scoresArray.length; i++){
			if(scoresArray[i] <= scoresArray[bestMatch]){
				bestMatch = i;
			}
		}

		var bff = friendList[bestMatch];
		res.json(bff);

		friendList.push(req.body);
	});
};


















// module.exports = function(app) {
// 	app.get("/api/friends", function(req, res) {
// 		res.json(friendList);
// 	});
// 	app.post("/api/friends", function(req, res) {
//  console.log(req.body.name);
//         console.log(req.body.scores.length);

//         var match = {};
        
//         var differenceToBeat = 1000;

//         for (var i = 0; i < friendList.length; i++) {

//             var differenceArray = [];
//             var totalDifference = 0;


//             for (var j = 0; j < friendList[i].scores.length; j++) {

//                 differenceArray.push( Math.abs( req.body.scores[j] - friendList[i].scores[j] ) );

//             };

//             console.log(differenceArray)

//             for (var k = 0; k < differenceArray.length; k++) {
//                 totalDifference += differenceArray[k];
//             }

//             console.log(totalDifference)
            

//             if (match == {}) {
//                 match = friendList[i];
//                 differenceToBeat = totalDifference;
//             } else if ( totalDifference < differenceToBeat ) {
//                 match = friendList[i];
//                 differenceToBeat = totalDifference;
//             }

//             console.log(differenceToBeat)

//         }


//         console.log('Your match is: ' + match.name)

//         // Push the new person into the friends array.
//         friendList.push(req.body)

//         // Return the friends array as JSON.
//         // res.json(friends)
//         res.json(match)

//     });

// }



// 		console.log(req.body.name);
// 		console.log(req.body.scores.length);
// 		var bestMatch = {
// 			name: "",
// 			photo: "",
// 			friendDifference: 1000
// 		};
// 		var userData = req.body;
// 		var userName = userData.name;
// 		var userPhoto = userData.photo;
// 		var userScores = userData.scores;
// 		var totalDifference = 0;
// 		for (var i = 0; i < friends.length; i++) {
// 			console.log(friends[i].name);
// 			totalDifference = 0;
// 			// loop throught to calculate difference
// 			for (var j = 0; j < 10; j++) {
// 				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
// 				if (totalDifference <= bestMatch.friendDifference) {
// 					bestMatch.name = friends[i].name;
// 					bestMatch.photo = friends[i].photo;
// 					bestMatch.friendDifference = totalDifference;
// 				}
// 			}
// 		}
// 		survey.push(userData);
// 		res.json(bestMatch);
// 	});
// };
// 		var differenceToBeat - 100;
// 		for(var i = 0; i < friendList.length; i++){
// 			var differenceArray = [i];
// 			var totalDifference = 0;
// 			for (var j = 0; j < friendList[i].scores.length; j++){
// 				differenceArray.push(Math.abs(req.body.scores]j) - friendList[i].scores[j]);
// 			};
// 			console.log(differenceArray);
// 			for (var k = 0; k < differenceArray.length; k++){
// 				totalDifference += differenceArray[k];
// 			}
// 			console.log(totalDifference);
// 			if(match =={}){
// 				match = friendList[i];
// 				differenceToBeat = totalDifference;
// 			} else if (totalDifference < differenceToBeat){
// 				match = friendList[i];
// 				differenceToBeat = totalDifference;
// 			}
// 			console.log(differenceToBeat);
// 		}
// 		console.log("you matched with" + match.name);
// 		friendList.push(req.body)
// 		res.json(match)
// 	});
// }
// //a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
// //Load Data
// var friendList = require('../app/data/friends.js');
// module.exports = function(app){
//   //a GET route that displays JSON of all possible friends
//   app.get('/api/friends', function(req,res){
//     res.json(friendList);
//   });
//   app.post('/api/friends', function(req,res){
//     //grabs the new friend's scores to compare with friends in friendList array
//     var newFriendScores = req.body.scores;
//     var scoresArray = [];
//     var friendCount = 0;
//     var bestMatch = 0;
//     //runs through all current friends in list
//     for(var i=0; i<friendList.length; i++){
//       var scoresDiff = 0;
//       //run through scores to compare friends
//       for(var j=0; j<newFriendScores.length; j++){
//         scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
//       }
//       //push results into scoresArray
//       scoresArray.push(scoresDiff);
//     }
//     //after all friends are compared, find best match
//     for(var i=0; i<scoresArray.length; i++){
//       if(scoresArray[i] <= scoresArray[bestMatch]){
//         bestMatch = i;
//       }
//     }
//     //return bestMatch data
//     var bff = friendList[bestMatch];
//     res.json(bff);
//     //pushes new submission into the friendsList array
//     friendList.push(req.body);
//   });
// };
// const path = require("path");
// const bodyParser = require("body-parser");
// let friendList = require("../data/friends.js");
// const express = require("express");
// module.exports = app =>{
// 	app.post("/api/addFriend", function(req, res){
// 		var newScores = req.body.scores.map(function(score){
// 			return parseInt(score);
// 		});
// 		req.body.scores = newScores;
// // push submitted form to friendList
// friendList.push(req.body);
// res.json(true);
// });
// app.get("/api/friends/:user_id?", function(req, res) {
// res.json(friendList)
// });
// }