var mongoose= require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('meanproject db opended');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        userName: String
    });
    var User = mongoose.model('User', userSchema);
    User.find({}).exec(function (error, collection) {
        if (collection.length === 0) {
            User.create({firstName: 'Mahen', lastName: 'Abeyrathna', userName: 'Mahen'});
            User.create({firstName: 'Sajeewi', lastName: 'Shanika', userName: 'Sajeewi'});
        }
        else {
            console.log(error, collection);
        }
    })
}