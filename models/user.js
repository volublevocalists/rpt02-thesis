var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
  })
}
// module.exports.userAccess = function(userId) {
//   let dataCompUserGoals = []
//   let userIdInDB = "5a989cc204ac7563fae85f68"

//   dataCompUserGoals.push(userIdInDB)

//   CompetitionsModel.find({ competitions_user: userIdInDB })
//     .then(function(data) {
//     dataCompUserGoals.push(data)
//     return GoalsModel.find({goals_user: userIdInDB})
//    })
//    .then(function(data) {
//      dataCompUserGoals.push(data)
//      callback(null, dataCompUserGoals)
//    })

//   .catch(function(err) {
//     console.log(err, 'this is the promise error')
//   })
// }